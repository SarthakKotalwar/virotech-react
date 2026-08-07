import "./Hero.scss";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import Reveal from "../../common/Reveal/Reveal";
import HeroData from "./HeroData";

export default function Hero() {

  const stageRef = useRef(null);
  const stageInnerRef = useRef(null);

  useEffect(() => {

    const stage = stageRef.current;
    const inner = stageInnerRef.current;

    if (!stage || !inner) return;

    let currentX = 12;
    let currentY = -18;

    let targetX = 12;
    let targetY = -18;

    const handleMove = (e) => {
      // Disable mouse perspective calculations on touch/mobile screens
      if (window.innerWidth <= 992) return;

      const rect = stage.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width;

      const y = (e.clientY - rect.top) / rect.height;

      targetY = -22 + x * 26;

      targetX = 16 - y * 18;

    };

    const handleLeave = () => {

      targetX = 12;

      targetY = -18;

    };

    stage.addEventListener("mousemove", handleMove);

    stage.addEventListener("mouseleave", handleLeave);

    let frame;

    const animate = () => {
      if (window.innerWidth > 992) {
        currentX += (targetX - currentX) * 0.08;

        currentY += (targetY - currentY) * 0.08;

        inner.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      } else {
        // Reset transform on mobile so SCSS media queries take control
        inner.style.transform = "";
      }

      frame = requestAnimationFrame(animate);

    };

    animate();

    return () => {

      stage.removeEventListener("mousemove", handleMove);

      stage.removeEventListener("mouseleave", handleLeave);

      cancelAnimationFrame(frame);

    };

  }, []);

  return (

    <section className="portfolio-hero">

      <div className="container">

        <div className="portfolio-hero__grid">

          {/* LEFT SIDE */}

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

                  <strong>

                    {HeroData.title.highlight}

                  </strong>

                </span>

              </h1>

            </Reveal>

            <Reveal delay={0.18}>

              <p className="hero-description">

                {HeroData.description}

              </p>

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

                  <div

                    className="hero-stat"

                    key={item.label}

                  >

                    <h3>

                      {item.number}

                    </h3>

                    <span>

                      {item.label}

                    </span>

                  </div>

                ))}

              </div>

            </Reveal>

          </div>

          {/* RIGHT SIDE */}

          <div

            className="portfolio-hero__visual"

            ref={stageRef}

          >

            <div className="stage-glow stage-glow-one" />

            <div className="stage-glow stage-glow-two" />

            <div className="stage-grid" />

            <div className="orbit orbit-one" />

            <div className="orbit orbit-two" />

            <div className="orbit orbit-three" />

            <div

              className="stage-inner"

              ref={stageInnerRef}

            >
              {HeroData.floatingCards.map((card) => (

                <a

                  key={card.id}

                  href={card.link}

                  target={
                    card.link.startsWith("http")
                      ? "_blank"
                      : "_self"
                  }

                  rel="noreferrer"

                  className={`floating-card ${card.className}`}

                >

                  <div className="floating-card__glass" />

                  <span className="floating-card__number">

                    {card.number}

                  </span>

                  <div className="floating-card__logo">

                    <img

                      src={card.logo}

                      alt={card.title}

                      loading="lazy"

                    />

                  </div>

                  <div className="floating-card__content">

                    <h4>

                      {card.title}

                    </h4>

                    <p>

                      {card.subtitle}

                    </p>

                  </div>

                </a>

              ))}

              {/* CENTER GLOW */}

              <div className="stage-center-glow" />

              {/* PARTICLES */}

              <div className="particles">

                {Array.from({ length: 16 }).map((_, index) => (

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