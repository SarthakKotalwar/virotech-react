import React, { useRef } from "react";
import visionMissionData from "./VisionMissionData";
import "./VisionMission.scss";

export default function VisionMission() {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)";
  };

  return (
    <section className="vision-mission about-section">
      <div className="about-container">
        <div className="about-section-header">
          <span className="about-section-tag">
            {visionMissionData.sectionTag}
          </span>
          <h2>{visionMissionData.sectionTitle}</h2>
          <p>{visionMissionData.sectionDescription}</p>
        </div>

        <div className="vision-mission__grid">
          {visionMissionData.cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                className="vision-card"
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="vision-card__glow" />
                <div className="vision-card__top">
                  <div className="vision-card__icon">
                    {Icon ? <Icon /> : null}
                  </div>
                  <span className="vision-card__num">0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="vision-card__bar" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}