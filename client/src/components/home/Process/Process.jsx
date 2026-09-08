import React from "react";
import { Compass, Layers, Code2, Rocket, ArrowRight, ArrowDown, ArrowLeft } from "lucide-react";
import "./Process.scss";

const steps = [
  {
    number: "01",
    title: "Discovery",
    icon: <Compass size={18} />,
    description: "Understanding business goals, users and technical requirements.",
    phase: "PHASE 01",
  },
  {
    number: "02",
    title: "Planning",
    icon: <Layers size={18} />,
    description: "Preparing architecture, UI/UX and project roadmap.",
    phase: "PHASE 02",
  },
  {
    number: "03",
    title: "Development",
    icon: <Code2 size={18} />,
    description: "Building secure, scalable and high-performance solutions.",
    phase: "PHASE 03",
  },
  {
    number: "04",
    title: "Launch & Support",
    icon: <Rocket size={18} />,
    description: "Deployment, monitoring and continuous improvement.",
    phase: "PHASE 04",
  },
];

export default function Process() {
  const handleMouseMove = (e, card) => {
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="process">
      <div className="container">
        <div className="process__header">
          <span className="section-tag">OUR PROCESS</span>
          <h2>How We Build Successful Products</h2>
          <p>
            Every successful project follows a proven engineering process that
            ensures quality, scalability and long-term success.
          </p>
        </div>

        <div className="process__pipeline-wrapper">
          {/* Desktop Single-Line Flow (1 -> 2 -> 3 -> 4) */}
          <div className="pipeline-track desktop-only" aria-hidden="true">
            <span className="laser-packet" />
          </div>

          <div className="process__cards">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div
                  className={`process-card step-${step.number}`}
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                >
                  <div className="card-spotlight" />

                  {/* Top Bar: Icon on Left, Badge on Right */}
                  <div className="process-card__top">
                    <span className="process-card__icon">{step.icon}</span>

                    <div className="process-card__badge">
                      <span className="badge-pulse" />
                      <strong>{step.number}</strong>
                    </div>
                  </div>

                  {/* Title & Body */}
                  <div className="process-card__body">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  {/* Footer Phase Line */}
                  <div className="process-card__footer-bar">
                    <span className="step-count">{step.phase}</span>
                    <span className="bar-progress" />
                  </div>
                </div>

                {/* Mobile & Tablet S-Curve Connectors */}
                {index === 0 && (
                  <div className="snake-connector snake-connector--1-to-2 mobile-tablet-only">
                    <div className="connector-line">
                      <span className="travel-dot" />
                    </div>
                    <ArrowRight size={14} className="connector-arrow" />
                  </div>
                )}

                {index === 1 && (
                  <div className="snake-connector snake-connector--2-to-3 mobile-tablet-only">
                    <div className="connector-line vertical">
                      <span className="travel-dot vertical" />
                    </div>
                    <ArrowDown size={14} className="connector-arrow" />
                  </div>
                )}

                {index === 2 && (
                  <div className="snake-connector snake-connector--3-to-4 mobile-tablet-only">
                    <ArrowLeft size={14} className="connector-arrow" />
                    <div className="connector-line">
                      <span className="travel-dot reverse" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}