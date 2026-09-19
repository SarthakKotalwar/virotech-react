import dotenv from "dotenv";
dotenv.config();

import dns from "node:dns";
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
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const sanitizeString = (value) => {
  if (typeof value !== "string") return "";
  return escapeHtml(value.trim()).slice(0, 5000);
};

const sanitizeEmail = (value) => sanitizeString(value).slice(0, 254);

const normalizeOrigins = (raw = "") =>
  raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const allowedOrigins = [
  ...normalizeOrigins(process.env.ALLOWED_ORIGINS),
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "https://virotech.in",
  "https://www.virotech.in",
];

app.disable("x-powered-by");
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Blocked by CORS policy"));
    },
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "1mb" }));

// Asynchronously resolves Hostinger's IPv4 address directly
async function createMailTransporter() {
  const smtpHost = (process.env.SMTP_HOST || "smtp.hostinger.com").trim();
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = (process.env.HOSTINGER_EMAIL_USER || "").trim();
  const smtpPass = (process.env.HOSTINGER_EMAIL_PASS || "").trim();

  const ipv4Addresses = await dns.promises.resolve4(smtpHost);
  if (!ipv4Addresses.length) {
    throw new Error(`No IPv4 address found for ${smtpHost}`);
  }

  return nodemailer.createTransport({
    host: ipv4Addresses[0], // Connects directly to IPv4 to prevent ENETUNREACH
    port: smtpPort,
    secure: process.env.SMTP_SECURE === "true",
    requireTLS: process.env.SMTP_SECURE !== "true",
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      minVersion: "TLSv1.2",
      servername: smtpHost, // Preserves hostname validation for TLS
    },
  });
}

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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: "Please provide a valid email address." });
  }

  const smtpUser = (process.env.HOSTINGER_EMAIL_USER || "").trim();
  const smtpPass = (process.env.HOSTINGER_EMAIL_PASS || "").trim();
  const recipient = (process.env.CONTACT_RECIPIENT || "support@virotech.in").trim();

  if (!smtpUser || !smtpPass) {
    console.error("SMTP credentials missing in environment variables.");
    return res.status(503).json({ success: false, message: "Email service is not configured." });
  }

  const selectedServices = services.length ? services.join(", ") : "None specified";

  const mailOptions = {
    from: `"Virotech Inquiries" <${smtpUser}>`,
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
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: #0f172a; padding: 24px; color: #fff;">
          <h2 style="margin: 0; font-size: 20px;">New Consultation Brief</h2>
          <p style="margin: 6px 0 0; color: #cbd5e1; font-size: 13px;">Received via virotech.in</p>
        </div>
        <div style="padding: 24px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 10px 0; color: #64748b; width: 150px; border-bottom: 1px solid #f1f5f9;"><strong>Name</strong></td><td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Email</strong></td><td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Organization</strong></td><td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${company || "N/A"}</td></tr>
            <tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Phone</strong></td><td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${phone || "N/A"}</td></tr>
            <tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Services</strong></td><td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${selectedServices}</td></tr>
            <tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Budget</strong></td><td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${budget || "Not specified"}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
            <strong style="display: block; font-size: 13px; color: #475569; margin-bottom: 8px;">Project Scope:</strong>
            <p style="margin: 0; color: #0f172a; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    const transporter = await createMailTransporter();
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Inquiry dispatched." });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(502).json({ success: false, message: "Email dispatch failed." });
  }
});

const port = Number(process.env.PORT || 5000);
app.listen(port, () => console.log(`Server running on port ${port}`));