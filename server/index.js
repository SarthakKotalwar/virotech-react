import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

// Permissive CORS to handle local dev + live domain
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "https://virotech.in",
  "https://www.virotech.in",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, or same-origin on Hostinger)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Blocked by CORS policy"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Transporter using App Password
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: (process.env.HOSTINGER_EMAIL_USER || "").trim(),
    pass: (process.env.HOSTINGER_EMAIL_PASS || "").trim(),
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verification check
transporter.verify((error) => {
  if (error) {
    console.error("Hostinger SMTP Verification Error:", error);
  } else {
    console.log("Hostinger SMTP Server ready to dispatch");
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Contact dispatch endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, company, phone, services, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  const selectedServices = Array.isArray(services) && services.length > 0 
    ? services.join(", ") 
    : "None specified";

  const mailOptions = {
    from: `"Virotech Inquiries" <${process.env.HOSTINGER_EMAIL_USER}>`,
    to: "support@virotech.in",
    replyTo: email,
    subject: `New Inquiry: ${name} (${company || "Direct Client"})`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: #0f172a; padding: 24px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px;">New Consultation Brief</h2>
          <p style="margin: 4px 0 0; color: #94a3b8; font-size: 13px;">Received via virotech.in</p>
        </div>
        
        <div style="padding: 24px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; width: 140px; border-bottom: 1px solid #f1f5f9;"><strong>Name</strong></td>
              <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Email</strong></td>
              <td style="padding: 10px 0; color: #2563eb; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Organization</strong></td>
              <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Phone</strong></td>
              <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${phone || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Services</strong></td>
              <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${selectedServices}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Budget</strong></td>
              <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${budget || "Not Specified"}</td>
            </tr>
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
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Inquiry dispatched." });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({ success: false, message: "Email dispatch failed." });
  }
});

// Hostinger assigns process.env.PORT automatically; defaults to 5000 locally
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});