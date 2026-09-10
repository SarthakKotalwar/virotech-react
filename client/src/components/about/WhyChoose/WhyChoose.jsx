import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiShield, FiTrendingUp } from "react-icons/fi";
import whyChooseData from "./WhyChooseData";
import "./WhyChoose.scss";

export default function WhyChoose() {
  return (
    <section className="why-choose-deck about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-section-header">
          <span className="about-section-tag">{whyChooseData.badge}</span>
          <h2>
            Engineered For <span>Scale</span>. Proven In <span>Production</span>.
          </h2>
          <p>{whyChooseData.description}</p>
        </div>

        {/* Dynamic Architectural Grid */}
        <div className="deck-stage">
          {/* Card 1: Master Capability Surface */}
          <div className="deck-card deck-card--flagship">
            <div className="deck-card__specular" />
            <div className="deck-card__header">
              <span className="deck-pill">
                <span className="deck-pill__pulse" /> ARCHITECTURE BENCHMARK
              </span>
            </div>

            <h3>Zero Technical Debt. Cloud-Native Velocity.</h3>
            <p>
              We don't build disposable code. Every deployment leverages isolated microservices,
              automated test suites, and enterprise zero-trust infrastructure designed to scale
              seamlessly.
            </p>

            <div className="deck-tech-stream">
              {whyChooseData.features.map((feat, i) => {
                const Icon = feat.icon || FiCheckCircle;
                return (
                  <div className="stream-badge" key={i}>
                    <Icon />
                    <span>{feat.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 2: Live Uptime Metric Tile */}
          <div className="deck-card deck-card--telemetry">
            <div className="telemetry-halo" />
            <span className="telemetry-tag">
              <span className="telemetry-dot" /> SLA STANDARD
            </span>
            <div className="telemetry-number">99.9%</div>
            <h4>Uptime & Execution SLA</h4>
            <p>Monitored round the clock with automated failovers and self-healing cloud instances.</p>
          </div>

          {/* Card 3: Enterprise Security Tile */}
          <div className="deck-card deck-card--security">
            <div className="deck-card__icon-badge">
              <FiShield />
            </div>
            <h4>Bank-Grade Security</h4>
            <p>Granular RBAC, OWASP Top 10 mitigation, and end-to-end data encryption by default.</p>
          </div>

          {/* Card 4: Velocity & Sprints Driver */}
          <div className="deck-card deck-card--sprints">
            <div className="sprints-info">
              <div className="sprints-tag">
                <FiTrendingUp />
                <span>AGILE CADENCE</span>
              </div>
              <h4>2-Week Deliverable Sprints</h4>
              <p>Direct access to engineers, bi-weekly staging builds, and complete codebase transparency.</p>
            </div>

            <Link to={whyChooseData.button.link} className="deck-cta-btn">
              <span>{whyChooseData.button.text}</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}