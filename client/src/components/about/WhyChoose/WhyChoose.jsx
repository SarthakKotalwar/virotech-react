import "./WhyChoose.scss";

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import whyChooseData from "./WhyChooseData";

export default function WhyChoose() {

  return (

    <section className="why-choose about-section">

      <div className="about-container">

        <div className="why-choose__grid">

          {/* LEFT CONTENT */}

          <div className="why-choose__content">

            <span className="about-section-tag">
              {whyChooseData.badge}
            </span>

            <h2>
              {whyChooseData.title}
            </h2>

            <p>
              {whyChooseData.description}
            </p>

            <div className="about-grid why-choose__features">

              {whyChooseData.features.map((item, index) => {

                const Icon = item.icon;

                return (

                  <article
                    className="about-card why-feature"
                    key={index}
                  >

                    <div className="about-card__icon">

                      <Icon />

                    </div>

                    <h3>{item.title}</h3>

                  </article>

                );

              })}

            </div>

            <Link
              to={whyChooseData.button.link}
              className="btn-primary"
            >

              {whyChooseData.button.text}

              <FiArrowRight />

            </Link>

          </div>

          {/* RIGHT VISUAL */}

          <div className="why-choose__visual">

            <div className="why-choose__illustration">

              <h3>Innovation</h3>

              <p>Engineering • Cloud • AI</p>

            </div>

            <div className="about-grid why-choose__stats">

              {whyChooseData.achievements.map((item, index) => (

                <article
                  className="about-card why-stat-card"
                  key={index}
                >

                  <h4>{item.value}</h4>

                  <p>{item.label}</p>

                </article>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}