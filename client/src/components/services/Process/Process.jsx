import React, { useEffect, useRef, useState } from "react";
import "./Process.scss";
import processData from "./ProcessData";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress percentage through the timeline element
      const totalHeight = rect.height;
      const progress = Math.min(
        Math.max((windowHeight * 0.6 - rect.top) / totalHeight, 0),
        1
      );
      setScrollProgress(progress * 100);

      // Determine active step based on scroll trigger point
      stepsRef.current.forEach((el, index) => {
        if (!el) return;
        const stepRect = el.getBoundingClientRect();
        if (stepRect.top < windowHeight * 0.65) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="services-process">
      <div className="container">
        <div className="services-section-header">
          <span className="services-section-tag">
            {processData.sectionTag}
          </span>
          <h2>{processData.sectionTitle}</h2>
          <p>{processData.sectionDescription}</p>
        </div>

        <div className="services-process__timeline" ref={timelineRef}>
          {/* Static background track */}
          <div className="services-process__track-bg" aria-hidden="true" />

          {/* Dynamic filled beam line driven by scroll */}
          <div
            className="services-process__progress-line"
            style={{ height: `${scrollProgress}%` }}
            aria-hidden="true"
          >
            <span className="progress-glow-head" />
          </div>

          {processData.steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = index <= activeStep;
            return (
              <article
                className={`services-process__step ${isCompleted ? "is-active" : ""}`}
                key={step.number}
                ref={(el) => (stepsRef.current[index] = el)}
              >
                <div className="services-process__icon">
                  <Icon />
                  <span className="icon-ripple" />
                </div>

                <div className="services-process__content">
                  <span className="services-process__number">
                    {step.number}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}