import "./CTA.scss";

import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiMail,
  FiPhone,
  FiClock,
} from "react-icons/fi";

import ctaData from "./CTAData";

export default function CTA() {
  return (
    <section className="about-cta">
      <div className="about-container">
        <div className="about-cta__wrapper">

          {/* ================= LEFT CONTENT ================= */}

          <div className="about-cta__content">

            <span className="about-cta__badge">
              {ctaData.badge}
            </span>

            <h2>
              {ctaData.title}
            </h2>

            <p>
              {ctaData.description}
            </p>

            <div className="about-cta__buttons">

              <Link
                to={ctaData.primaryButton.link}
                className="about-btn about-btn--primary"
              >
                {ctaData.primaryButton.text}
                <FiArrowRight />
              </Link>

              <Link
                to={ctaData.secondaryButton.link}
                className="about-btn about-btn--secondary"
              >
                {ctaData.secondaryButton.text}
              </Link>

            </div>

          </div>

          {/* ================= RIGHT CONTACT ================= */}

          <div className="about-cta__info">

            {/* EMAIL */}

            <a
              href={ctaData.contact.email.link}
              className="contact-card"
            >
              <div className="contact-card__icon">
                <FiMail />
              </div>

              <div className="contact-card__content">
                <span>
                  {ctaData.contact.email.label}
                </span>

                <strong>
                  {ctaData.contact.email.value}
                </strong>
              </div>
            </a>

            {/* PHONE */}

            <a
              href={ctaData.contact.phone.link}
              className="contact-card"
            >
              <div className="contact-card__icon">
                <FiPhone />
              </div>

              <div className="contact-card__content">
                <span>
                  {ctaData.contact.phone.label}
                </span>

                <strong>
                  {ctaData.contact.phone.value}
                </strong>
              </div>
            </a>

            {/* SUPPORT */}

            <Link
              to={ctaData.contact.support.link}
              className="contact-card"
            >
              <div className="contact-card__icon">
                <FiClock />
              </div>

              <div className="contact-card__content">
                <span>
                  {ctaData.contact.support.label}
                </span>

                <strong>
                  {ctaData.contact.support.value}
                </strong>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}