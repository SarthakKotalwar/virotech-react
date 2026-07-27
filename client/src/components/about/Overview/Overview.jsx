import "./Overview.scss";

import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

import overviewData from "./OverviewData";

export default function Overview() {
  return (
    <section className="overview about-section">

      <div className="about-container">

        <div className="overview__grid">

          {/* ================= LEFT ================= */}

          <div className="overview__content">

            <span className="overview__badge">
              {overviewData.badge}
            </span>

            <h2>{overviewData.title}</h2>

            <p>{overviewData.description}</p>

            <div className="overview__features">

              {overviewData.highlights.map((item, index) => (

                <div
                  className="overview__feature about-card"
                  key={index}
                >
                  <FiCheckCircle />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <Link
              to={overviewData.button.link}
              className="btn-primary"
            >
              {overviewData.button.text}

              <FiArrowRight />

            </Link>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="overview__visual">

            <div className="overview__image">

              <div className="overview__experience">

                <h3>
                  {overviewData.experience.value}
                </h3>

                <p>
                  {overviewData.experience.label}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}