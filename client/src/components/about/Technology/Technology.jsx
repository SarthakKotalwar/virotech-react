import React, { useState, useEffect, useCallback } from "react";
import { FiCpu, FiLayers, FiCheckCircle, FiTerminal } from "react-icons/fi";
import technologyData from "./TechnologyData";
import "./Technology.scss";

export default function Technology() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = technologyData.categories.length;
  const current = technologyData.categories[activeCategory];

  const nextCategory = useCallback(() => {
    setActiveCategory((prev) => (prev + 1) % total);
  }, [total]);

  const prevCategory = useCallback(() => {
    setActiveCategory((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Robust Auto-Slider Timer
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, total]);

  // Intercept intentional horizontal swipes/trackpad scrolls
  const handleHorizontalWheel = (e) => {
    if (Math.abs(e.deltaX) > 40) {
      if (e.deltaX > 0) nextCategory();
      else prevCategory();
    }
  };

  return (
    <section className="tech-matrix about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-section-header">
          <span className="about-section-tag">{technologyData.badge}</span>
          <h2>
            Modern Stacks. <span>Engineered</span> Without Compromise.
          </h2>
          <p>{technologyData.description}</p>
        </div>

        {/* Category Navigation with Dynamic Auto-Progress Bar */}
        <div className="tech-matrix__nav-wrap">
          <div className="tech-matrix__nav">
            {technologyData.categories.map((cat, idx) => {
              const isActive = idx === activeCategory;
              return (
                <button
                  type="button"
                  key={idx}
                  className={`tech-nav-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(idx)}
                >
                  <span>{cat.title}</span>
                  {isActive && !isHovered && <span className="nav-btn-progress" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Console Showcase Deck */}
        <div
          className="tech-matrix__stage"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onWheel={handleHorizontalWheel}
        >
          {/* Left Console Pod */}
          <div className="tech-console-card">
            <div className="tech-console-card__glow" />
            <div className="tech-console-card__header">
              <div className="console-indicator">
                <span className="console-dot" />
                <span>DOMAIN 0{activeCategory + 1} // 0{total}</span>
              </div>
              <FiTerminal className="console-icon" />
            </div>

            <div className="console-body">
              <h3>{current.title} Architecture</h3>
              <p>
                Engineered with battle-tested industry patterns, automated continuous validation,
                and high-throughput performance pipelines.
              </p>
            </div>

            <div className="tech-console-card__footer">
              <div className="meta-pill">
                <FiLayers />
                <span>Cloud-Native</span>
              </div>
              <div className="meta-pill">
                <FiCheckCircle />
                <span>Zero Technical Debt</span>
              </div>
            </div>
          </div>

          {/* Right Framework Matrix */}
          <div className="tech-chips-board">
            <div className="chips-grid" key={activeCategory}>
              {current.tech.map((tool, i) => (
                <div
                  className="tech-chip"
                  key={i}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="tech-chip__indicator">
                    <FiCpu />
                  </div>
                  <div className="tech-chip__info">
                    <h4>{tool}</h4>
                    <span>Enterprise Tier</span>
                  </div>
                  <div className="tech-chip__glow-bar" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}