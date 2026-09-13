import React, { useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Send,
  ShieldCheck,
  Terminal,
  Hash,
  Clock,
  Copy,
  CheckCheck
} from "lucide-react";
import "./ContactForm.scss";

const serviceOptions = [
  "Web Platforms",
  "Cloud & DevOps",
  "AI & Automations",
  "3D & Creative Tech",
  "Custom Enterprise Software",
  "E-Commerce Architecture",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    services: [],
    budget: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const [receiptMeta, setReceiptMeta] = useState({
    refNumber: "",
    timestamp: "",
  });

  const wrapperRef = useRef(null);

  // Form completion percentage
  const totalWeight = 5;
  let filledWeight = 0;
  if (form.name.trim()) filledWeight++;
  if (form.email.trim()) filledWeight++;
  if (form.services.length > 0) filledWeight++;
  if (form.budget.trim()) filledWeight++;
  if (form.message.trim()) filledWeight++;
  const completionPercent = Math.round((filledWeight / totalWeight) * 100);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleCopyRef = () => {
    if (!receiptMeta.refNumber) return;
    navigator.clipboard.writeText(receiptMeta.refNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const STARTING_INDEX = 1001;
        const currentCounter = parseInt(localStorage.getItem("viro_ref_counter") || `${STARTING_INDEX}`, 10);
        const generatedRef = `VIRO-REF-${currentCounter}`;
        localStorage.setItem("viro_ref_counter", `${currentCounter + 1}`);

        const timeString = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        setReceiptMeta({
          refNumber: generatedRef,
          timestamp: timeString,
        });

        setTimeout(() => {
          setSubmitted(true);
          setSubmitting(false);

          requestAnimationFrame(() => {
            wrapperRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          });
        }, 600);
      } else {
        setErrorMessage(data.message || "Failed to send transmission. Please try again.");
        setSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Unable to connect to server. Check if your backend is running.");
      setSubmitting(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`contact-form-wrapper ${submitting ? "is-transmitting" : ""}`}
    >
      {!submitted && (
        <div
          className="form-laser-progress"
          style={{ width: `${completionPercent}%` }}
        />
      )}

      {submitted ? (
        <div className="contact-form contact-form--success">
          <div className="cyber-glow cyber-glow--primary" />
          <div className="cyber-glow cyber-glow--secondary" />

          <div className="beacon-container">
            <div className="beacon-ring beacon-ring--3" />
            <div className="beacon-ring beacon-ring--2" />
            <div className="beacon-ring beacon-ring--1" />
            <div className="beacon-core">
              <Check size={32} strokeWidth={3} />
            </div>
          </div>

          <div className="success-header">
            <div className="status-pill">
              <ShieldCheck size={13} strokeWidth={2.4} />
              <span>DIRECTIVE CONFIRMED & FILED</span>
            </div>
            <h3>
              Transmission <em>Acknowledged.</em>
            </h3>
            <p>
              Your inquiry has been cataloged into our active queue. A lead
              engineer is reviewing your architecture specifications.
            </p>
          </div>

          <div className="telemetry-ticket">
            <div className="telemetry-ticket__header">
              <div className="telemetry-ticket__meta">
                <span className="dot active" />
                <strong>TELEMETRY RECEIPT</strong>
              </div>
              <button
                type="button"
                className="copy-hash-btn"
                onClick={handleCopyRef}
                title="Copy Reference Code"
              >
                {copied ? <CheckCheck size={12} /> : <Copy size={12} />}
                <span>{copied ? "COPIED" : "COPY REF"}</span>
              </button>
            </div>

            <div className="telemetry-grid">
              <div className="telemetry-item">
                <span className="telemetry-label">
                  <Hash size={11} /> REFERENCE CODE
                </span>
                <span className="telemetry-val hash-val">{receiptMeta.refNumber}</span>
              </div>

              <div className="telemetry-item">
                <span className="telemetry-label">
                  <Clock size={11} /> DISPATCH TIME
                </span>
                <span className="telemetry-val">{receiptMeta.timestamp} IST</span>
              </div>
            </div>

            <div className="telemetry-ticket__footer">
              <div className="sla-indicator">
                <span className="sla-dot" />
                <span>
                  Expected Review Window: <strong>&lt; 2–4 Business Hours</strong>
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="contact-form__reset"
            onClick={() => {
              setForm({
                name: "",
                email: "",
                company: "",
                phone: "",
                message: "",
                services: [],
                budget: "",
              });
              setSubmitted(false);
            }}
          >
            Dispatch Another Brief <ArrowUpRight size={14} />
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitting && <div className="transmission-scan-wave" />}

          <div className="contact-form__header">
            <div>
              <span className="contact-label">03 / PROJECT SPECS</span>
              <h3>
                Configure your <span>next leap.</span>
              </h3>
            </div>
            <div className="completion-tag">
              <span className="dot" />
              <span>{completionPercent}% READY</span>
            </div>
          </div>

          <div className="contact-form__section">
            <div className="contact-form__section-title">
              <span>01</span>
              <strong>General Identifiers</strong>
            </div>
            <div className="contact-form__fields">
              <div className="input-field">
                <input
                  type="text"
                  required
                  placeholder=" "
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
                <label>YOUR NAME *</label>
              </div>

              <div className="input-field">
                <input
                  type="email"
                  required
                  placeholder=" "
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
                <label>WORK EMAIL *</label>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  placeholder=" "
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                />
                <label>ORGANIZATION</label>
              </div>

              <div className="input-field">
                <input
                  type="tel"
                  placeholder=" "
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
                <label>CONTACT NUMBER</label>
              </div>
            </div>
          </div>

          <div className="contact-form__section">
            <div className="contact-form__section-title">
              <span>02</span>
              <strong>Domain Architecture</strong>
            </div>
            <div className="contact-form__pills">
              {serviceOptions.map((service) => {
                const active = form.services.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    className={`pill-btn ${active ? "active" : ""}`}
                    onClick={() => toggleService(service)}
                  >
                    <span>{service}</span>
                    {active && <Check size={12} strokeWidth={2.5} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              SECTION 03: ESTIMATED SCALE (TEXT INPUT + QUICK PILL)
          ===================================================== */}
          <div className="contact-form__section">
            <div className="contact-form__section-title">
              <span>03</span>
              <strong>Estimated Scale</strong>
            </div>
            <div className="contact-form__scale-row">
              <div className="input-field contact-form__scale-input">
                <input
                  type="text"
                  placeholder=" "
                  value={form.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                />
                <label>SPECIFY BUDGET (MIN. ₹20K) OR CUSTOM TARGET</label>
              </div>

              <button
                type="button"
                className={`pill-btn scale-pill ${
                  form.budget === "Flexible / Equity" ? "active" : ""
                }`}
                onClick={() =>
                  updateField(
                    "budget",
                    form.budget === "Flexible / Equity" ? "" : "Flexible / Equity"
                  )
                }
              >
                <span>Flexible / Equity</span>
                {form.budget === "Flexible / Equity" && (
                  <Check size={12} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          <div className="contact-form__section">
            <div className="contact-form__section-title">
              <span>04</span>
              <strong>Project Objectives</strong>
            </div>
            <div className="input-field input-field--textarea">
              <textarea
                required
                rows="4"
                placeholder="Briefly outline your goals, timeline, or engineering obstacles..."
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
              />
            </div>
          </div>

          {errorMessage && <p className="form-error-msg">{errorMessage}</p>}

          <div className="contact-form__footer">
            <div className="footer-status">
              <Terminal size={14} className="term-icon" />
              <span>Direct engineer dispatch • NDA protected</span>
            </div>

            <button
              type="submit"
              className={`contact-form__submit ${submitting ? "is-launching" : ""}`}
              disabled={submitting}
            >
              <span className="btn-text">
                {submitting ? "Broadcasting Directive..." : "Send Directive"}
              </span>

              <span className="btn-circle">
                {submitting ? (
                  <Send size={15} className="rocket-flight" />
                ) : (
                  <ArrowUpRight size={16} strokeWidth={2} className="btn-arrow" />
                )}
              </span>

              {submitting && <span className="btn-beam" />}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;