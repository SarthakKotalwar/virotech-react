import React, { useRef } from "react";
import { ArrowUpRight, Cpu, Layers, Radio } from "lucide-react";
import "./ContactProcess.scss";

const processSteps = [
  {
    number: "01",
    title: "Deconstruct & Probe",
    description:
      "Deep discovery of technical bottlenecks, architecture limits, performance benchmarks, and core targets.",
    icon: Radio,
  },
  {
    number: "02",
    title: "Prototype & Shape",
    description:
      "High-velocity spatial designs, interactive prototypes, and scalable architecture schemas.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Build & Accelerate",
    description:
      "Production-grade code execution, GPU rendering optimizations, and deterministic cloud deployment.",
    icon: Cpu,
  },
];

const ContactProcess = () => {
  const cardsRef = useRef([]);

  const handleCardTilt = (e, index) => {
    const el = cardsRef.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.setProperty("--rx", `${y * -14}deg`);
    el.style.setProperty("--ry", `${x * 14}deg`);
    el.style.setProperty("--glow-x", `${(e.clientX - rect.left)}px`);
    el.style.setProperty("--glow-y", `${(e.clientY - rect.top)}px`);
  };

  const handleCardReset = (index) => {
    const el = cardsRef.current[index];
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <section className="contact-process">
      <div className="contact-process__bg-glow" />
      <div className="contact-process__container">
        <div className="contact-process__heading">
          <span className="contact-label">04 / THE EXECUTION PIPELINE</span>
          <h2>
            Zero friction. <span>Pure velocity.</span>
          </h2>
          <p>
            Complex systems simplified through modular phases, transparent milestones,
            and deterministic engineering.
          </p>
        </div>

        <div className="contact-process__cards">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`contact-process__card card-${idx + 1}`}
                onMouseMove={(e) => handleCardTilt(e, idx)}
                onMouseLeave={() => handleCardReset(idx)}
              >
                <div className="card-spotlight" />
                <div className="contact-process__card-top">
                  <span>PHASE / {step.number}</span>
                  <div className="arrow-badge">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <div className="contact-process__card-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="contact-process__card-progress" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactProcess;