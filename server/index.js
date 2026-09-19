import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

const escapeHtml = (value) => {
  if (typeof value !== "string") return "";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const sanitizeString = (value) => {
  if (typeof value !== "string") return "";
  return escapeHtml(value.trim()).slice(0, 5000);
};

const sanitizeEmail = (value) => sanitizeString(value).slice(0, 254);
const normalizeOrigins = (raw = "") => raw.split(",").map((item) => item.trim()).filter(Boolean);
const allowedOrigins = [
  ...normalizeOrigins(process.env.ALLOWED_ORIGINS),
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "https://virotech.in",
  "https://www.virotech.in",
];

app.disable("x-powered-by");
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Blocked by CORS policy"));
  },
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json({ limit: "1mb" }));

const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = process.env.SMTP_SECURE
  ? process.env.SMTP_SECURE === "true"
  : smtpPort === 465;
const smtpUser = (process.env.HOSTINGER_EMAIL_USER || "").trim();
const smtpPass = (process.env.HOSTINGER_EMAIL_PASS || "").trim();
const recipient = (process.env.CONTACT_RECIPIENT || smtpUser).trim();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: smtpPort,
  secure: smtpSecure,
  requireTLS: !smtpSecure,
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
  auth: { user: smtpUser, pass: smtpPass },
  tls: { minVersion: "TLSv1.2" },
});

transporter.verify((error) => {
  if (error) console.error("SMTP verification failed:", error);
  else console.log("SMTP server ready to dispatch");
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.post("/api/contact", async (req, res) => {
  const body = req.body || {};
  const name = sanitizeString(body.name);
  const email = sanitizeEmail(body.email);
  const company = sanitizeString(body.company);
  const phone = sanitizeString(body.phone);
  const message = sanitizeString(body.message);
  const services = Array.isArray(body.services) ? body.services.map(sanitizeString) : [];
  const budget = sanitizeString(body.budget);

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, email, and message are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: "Please provide a valid email address." });
  }
  if (!smtpUser || !smtpPass || !recipient) {
    console.error("SMTP environment variables are incomplete");
    return res.status(503).json({ success: false, message: "Email service is not configured." });
  }

  const selectedServices = services.length ? services.join(", ") : "None specified";
  const mailOptions = {
    from: `Virotech Inquiries <${smtpUser}>`,
    to: recipient,
    replyTo: email,
    subject: `New Inquiry: ${name} (${company || "Direct Client"})`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${company || "N/A"}`,
      `Phone: ${phone || "N/A"}`,
      `Services: ${selectedServices}`,
      `Budget: ${budget || "Not specified"}`,
      "",
      "Project Scope:",
      message,
    ].join("\n"),
    html: `<h2>New Consultation Brief</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Organization:</strong> ${company || "N/A"}</p><p><strong>Phone:</strong> ${phone || "N/A"}</p><p><strong>Services:</strong> ${selectedServices}</p><p><strong>Budget:</strong> ${budget || "Not specified"}</p><hr><p><strong>Project Scope:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Inquiry dispatched." });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(502).json({ success: false, message: "Email dispatch failed." });
  }
});

const port = Number(process.env.PORT || 5000);
app.listen(port, () => console.log(`Server running on port ${port}`));
