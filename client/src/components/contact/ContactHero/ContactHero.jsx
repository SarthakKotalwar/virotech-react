import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Globe2,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import "./ContactHero.scss";

const scopeTiers = [
  { id: "sprint", label: "MVP / Sprint", time: "2–4 Weeks", sla: "Same Day" },
  { id: "scale", label: "Full Platform", time: "1–3 Months", sla: "< 4 Hours" },
  { id: "enterprise", label: "Enterprise Infra", time: "Dedicated", sla: "Instant (1h)" },
];

const ContactHero = () => {
  const [selectedTier, setSelectedTier] = useState("scale");
  const [ping, setPing] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setPing(20 + Math.floor(Math.random() * 8));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToMain = () => {
    document.querySelector(".contact-main")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const activeTierData = scopeTiers.find((t) => t.id === selectedTier);

  return (
    <section className="contact-hero" aria-label="Contact Virotech">
      <div className="contact-hero__ambient" />

      <div className="contact-hero__container">
        {/* Top Status Bar */}
        <div className="contact-hero__meta">
          <span className="contact-hero__tag">
            <Sparkles size={13} />
            DIRECT ENGINEERING CONSULTATION
          </span>

          <div className="contact-hero__status">
            <span className="pulse-beacon" />
            <span>OPERATIONAL PIPELINE OPEN</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="contact-hero__content">
          <div className="contact-hero__copy">
            <span className="contact-hero__eyebrow">
              ENGINEERING NEXT-GEN SOFTWARE
            </span>

            <h1>
              Let’s build what’s
              <span>next together.</span>
            </h1>

            <p>
              Partner with our cloud architects, software specialists, and
              infrastructure engineers to launch scalable digital platforms.
            </p>

            <div className="contact-hero__actions">
              <button
                type="button"
                className="contact-hero__primary-btn"
                onClick={scrollToMain}
              >
                <span>Initiate Consultation</span>
                <span className="btn-circle">
                  <ArrowUpRight size={16} strokeWidth={2} />
                </span>
              </button>

              <div className="contact-hero__metric">
                <strong>{ping}ms Latency</strong>
                <span>Direct Engineering Dispatch</span>
              </div>
            </div>

            <div className="contact-hero__badges">
              <div className="badge-item">
                <ShieldCheck size={15} className="badge-icon" />
                <span>Enterprise NDA Protected</span>
              </div>
              <div className="badge-item">
                <CheckCircle2 size={15} className="badge-icon" />
                <span>No Vendor Lock-In</span>
              </div>
            </div>
          </div>

          {/* Right Console: Live Project & System Diagnostic Terminal */}
          <div className="contact-hero__terminal">
            <div className="terminal-card">
              {/* Terminal Header */}
              <div className="terminal-card__header">
                <div className="terminal-card__title">
                  <div className="mac-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong>System Deployment Hub</strong>
                </div>
                <span className="terminal-card__pill">
                  <span className="green-dot" /> Online
                </span>
              </div>

              {/* Interactive Scope Selector */}
              <div className="terminal-card__scope">
                <span className="section-label">SELECT PROJECT COMPLEXITY</span>
                <div className="tier-pills">
                  {scopeTiers.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      className={`tier-btn ${selectedTier === tier.id ? "is-active" : ""}`}
                      onClick={() => setSelectedTier(tier.id)}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic SLA Metrics Grid */}
              <div className="terminal-card__stats">
                <div className="stat-box">
                  <span className="stat-label">Estimated Sprint</span>
                  <strong className="stat-value">{activeTierData.time}</strong>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Technical SLA</span>
                  <strong className="stat-value highlight">{activeTierData.sla}</strong>
                </div>
              </div>

              {/* Real-time Infrastructure Nodes */}
              <div className="terminal-card__nodes">
                <span className="section-label">LIVE SYSTEM ARCHITECTURE</span>
                <div className="nodes-grid">
                  <div className="node-item">
                    <div className="node-icon blue">
                      <Server size={14} />
                    </div>
                    <div className="node-info">
                      <strong>Cloud Clusters</strong>
                      <span>Auto-scaling AWS/GCP</span>
                    </div>
                    <span className="node-status">99.99%</span>
                  </div>

                  <div className="node-item">
                    <div className="node-icon indigo">
                      <Cpu size={14} />
                    </div>
                    <div className="node-info">
                      <strong>AI &amp; Workflows</strong>
                      <span>Real-time Inference</span>
                    </div>
                    <span className="node-status">Active</span>
                  </div>

                  <div className="node-item">
                    <div className="node-icon green">
                      <Globe2 size={14} />
                    </div>
                    <div className="node-info">
                      <strong>Global Edge CDN</strong>
                      <span>Sub-30ms Worldwide</span>
                    </div>
                    <span className="node-status">Healthy</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action Note */}
              <div className="terminal-card__footer" onClick={scrollToMain}>
                <div className="footer-left">
                  <Zap size={14} className="zap-icon" />
                  <span>Ready to deploy technical specifications?</span>
                </div>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Scroll Pointer */}
        <button
          type="button"
          className="contact-hero__scroll"
          onClick={scrollToMain}
        >
          <span>SPECIFY REQUIREMENTS</span>
          <ArrowDownRight size={15} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
};

export default ContactHero;