import "./Hero.scss";

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import heroData from "./HeroData";

export default function Hero() {

  return (

    <section className="about-hero">

      <div className="about-container">

        <div className="about-hero__grid">

          {/* ================= Left Content ================= */}

          <div className="about-hero__content">

            <span className="about-hero__badge">

              {heroData.badge}

            </span>

            <h1>

              {heroData.title}

            </h1>

            <p>

              {heroData.description}

            </p>

            <div className="about-hero__buttons">

              <Link

                to={heroData.primaryButton.link}

                className="btn-primary"

              >

                {heroData.primaryButton.text}

                <FiArrowRight />

              </Link>

              <Link

                to={heroData.secondaryButton.link}

                className="btn-outline"

              >

                {heroData.secondaryButton.text}

              </Link>

            </div>

          </div>

          {/* ================= Right Side ================= */}

          <div className="about-hero__visual">

            <div className="about-hero__illustration">

              <h3>Innovation</h3>

              <span>Cloud • AI • DevOps</span>

            </div>

          </div>

        </div>

        {/* ================= Statistics ================= */}

        <div className="about-hero__stats">

          {

            heroData.stats.map((item, index) => (

              <div

                className="about-stat-card"

                key={index}

              >

                <h3>

                  {item.value}

                </h3>

                <p>

                  {item.label}

                </p>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}