import React, { useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Reveal from "../../common/Reveal/Reveal";
import HeroData from "./HeroData";
import FeaturedProjectsData from "../FeaturedProjects/FeaturedProjectsData";
import "./Hero.scss";

export default function Hero() {
  const stageRef = useRef(null);
  const stageInnerRef = useRef(null);

  // Randomize cards on every page mount
  const randomizedCards = useMemo(() => {
    const classNames = ["card-one", "card-two", "card-three", "card-four"];
    const dataset =
      FeaturedProjectsData && FeaturedProjectsData.length >= 4
        ? [...FeaturedProjectsData]
        : [...HeroData.floatingCards];

    for (let i = dataset.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dataset[i], dataset[j]] = [dataset[j], dataset[i]];
    }

    return classNames.map((className, idx) => {
      const project = dataset[idx];
      return {
        id: project.id,
        number: String(idx + 1).padStart(2, "0"),
        title: project.title,
        subtitle: project.platform || project.category || "PLATFORM",
        logo: project.logo,
        link: project.website || "/portfolio",
        className,
      };
    });
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const inner = stageInnerRef.current;
    if (!stage || !inner) return;

    let currentX = 8;
    let currentY = -12;
    let targetX = 8;
    let targetY = -12;
    let frameId;

    const handlePointerMove = (clientX, clientY) => {
      const rect = stage.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      targetY = -18 + x * 20;
      targetX = 12 - y * 14;
    };

    const handleMouseMove = (e) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleLeave = () => {
      targetX = 8;
      targetY = -12;
    };

    stage.addEventListener("mousemove", handleMouseMove, { passive: true });
    stage.addEventListener("touchmove", handleTouchMove, { passive: true });
    stage.addEventListener("mouseleave", handleLeave);
    stage.addEventListener("touchend", handleLeave);

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      inner.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      stage.removeEventListener("mousemove", handleMouseMove);
      stage.removeEventListener("touchmove", handleTouchMove);
      stage.removeEventListener("mouseleave", handleLeave);
      stage.removeEventListener("touchend", handleLeave);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="portfolio-hero">
      <div className="container">
        <div className="portfolio-hero__grid">
          {/* LEFT CONTENT */}
          <div className="portfolio-hero__content">
            <Reveal>
              <span className="hero-badge">
                <span className="hero-badge__dot" />
                {HeroData.badge}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="hero-title">
                <span>{HeroData.title.first}</span>
                <span>{HeroData.title.second}</span>
                <span>
                  {HeroData.title.third}{" "}
                  <strong>{HeroData.title.highlight}</strong>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="hero-description">{HeroData.description}</p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="hero-buttons">
                <Link
                  to={HeroData.buttons.primary.link}
                  className="hero-btn hero-btn--primary"
                >
                  {HeroData.buttons.primary.text}
                  <FiArrowRight />
                </Link>
                <Link
                  to={HeroData.buttons.secondary.link}
                  className="hero-btn hero-btn--secondary"
                >
                  {HeroData.buttons.secondary.text}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="hero-stats">
                {HeroData.stats.map((item) => (
                  <div className="hero-stat" key={item.label}>
                    <h3>{item.number}</h3>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT 3D STAGE */}
          <div className="portfolio-hero__visual" ref={stageRef}>
            <div className="stage-glow stage-glow-one" />
            <div className="stage-glow stage-glow-two" />
            <div className="stage-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="stage-inner" ref={stageInnerRef}>
              {randomizedCards.map((card) => (
                <a
                  key={`${card.id}-${card.className}`}
                  href={card.link}
                  target={card.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className={`floating-card ${card.className}`}
                >
                  <div className="floating-card__glass" />
                  <span className="floating-card__number">{card.number}</span>
                  <div className="floating-card__logo">
                    {card.logo ? (
                      <img
                        src={card.logo}
                        alt={card.title}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}
                  </div>
                  <div className="floating-card__content">
                    <h4>{card.title}</h4>
                    <p>{card.subtitle}</p>
                  </div>
                </a>
              ))}

              <div className="stage-center-glow" />

              <div className="particles">
                {Array.from({ length: 14 }).map((_, index) => (
                  <span
                    key={index}
                    className={`particle particle-${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}