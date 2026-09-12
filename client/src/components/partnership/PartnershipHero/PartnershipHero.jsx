import { useEffect, useState } from "react";
import "./PartnershipHero.scss";

const FLOW_STEPS = [
  {
    icon: "+",
    title: "Connect",
    caption: "First conversation about your business and the opportunity.",
  },
  {
    icon: "↗",
    title: "Explore",
    caption: "We find the strongest collaboration model together.",
  },
  {
    icon: "∞",
    title: "Collaborate",
    caption: "Teams align on responsibilities, tech and terms.",
  },
  {
    icon: "✓",
    title: "Scale",
    caption: "The partnership launches and grows from there.",
  },
];

const STEP_DURATION = 3200; // ms per step, loops forever

export default function PartnershipHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % FLOW_STEPS.length);
    }, STEP_DURATION);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="partnership-hero">
      <div className="partnership-hero__background">
        <span className="partnership-hero__glow partnership-hero__glow--one" />
        <span className="partnership-hero__glow partnership-hero__glow--two" />
      </div>

      <div className="partnership-hero__container">
        {/* LEFT — CONTENT */}
        <div className="partnership-hero__content">
          <div className="partnership-hero__eyebrow">
            <span className="partnership-hero__eyebrow-dot" />
            PARTNERSHIP STUDIO
          </div>

          <h1>
            Better together.
            <br />
            <span>Built for bigger</span>
            <br />
            outcomes.
          </h1>

          <p className="partnership-hero__description">
            We partner with ambitious companies, agencies, technology
            teams and consultants to turn ideas into scalable digital
            products and long-term business value.
          </p>

          <div className="partnership-hero__actions">
            <a
              href="#contact"
              className="partnership-button partnership-button--primary"
            >
              Become a Partner
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>

            <a
              href="#models"
              className="partnership-button partnership-button--secondary"
            >
              Explore Partnerships
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m6 13 6 6 6-6" />
              </svg>
            </a>
          </div>

          <div className="partnership-hero__metrics">
            <div>
              <strong>04</strong>
              <span>Partnership models</span>
            </div>
            <div>
              <strong>360°</strong>
              <span>Technology support</span>
            </div>
            <div>
              <strong>01</strong>
              <span>Shared direction</span>
            </div>
          </div>
        </div>

        {/* RIGHT — ANIMATED PROCESS PREVIEW ("video") */}
        <div className="partnership-hero__flow">
          <div className="partnership-hero__flow-frame">
            <div className="partnership-hero__flow-topbar">
              <span className="partnership-hero__flow-rec" />
              Partnership Process
              <span className="partnership-hero__flow-step-count">
                {String(active + 1).padStart(2, "0")} / 04
              </span>
            </div>

            <div className="partnership-hero__flow-scene">
              {FLOW_STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className={[
                    "partnership-hero__flow-panel",
                    i === active ? "is-active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span className="partnership-hero__flow-icon">
                    {step.icon}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.caption}</p>
                </div>
              ))}
            </div>

            <div className="partnership-hero__flow-track">
              {FLOW_STEPS.map((step, i) => (
                <button
                  key={step.title}
                  type="button"
                  aria-label={`Show ${step.title} step`}
                  className="partnership-hero__flow-seg"
                  onClick={() => setActive(i)}
                >
                  {i < active && (
                    <span
                      className="partnership-hero__flow-seg-fill"
                      style={{ width: "100%" }}
                    />
                  )}
                  {i === active && (
                    <span
                      key={active}
                      className="partnership-hero__flow-seg-fill is-filling"
                      style={{ animationDuration: `${STEP_DURATION}ms` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}