import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, CalendarCheck, Phone } from "lucide-react";
import "./CTA.scss";

export default function CTA() {
  const emailAddress = "support@virotech.in";
  const emailSubject = encodeURIComponent("Inquiry - Virotech Technologies");
  const emailBody = encodeURIComponent(
    "Hello Virotech Team,\n\nI would like to explore your services and solutions.\n\n"
  );
  const mailtoUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="about-cta">
      <div className="about-container">
        <div className="about-cta__card">
          <div className="about-cta__circle about-cta__circle--1" />
          <div className="about-cta__circle about-cta__circle--2" />

          <span className="about-section-tag">LET'S CONNECT</span>

          <h2>
            Let's Build Something <span>Exceptional Together</span>
          </h2>

          <p>
            Whether you're planning cloud migration, enterprise software, AI
            workflows, or modern digital experiences, our team is ready to help
            you architect and execute.
          </p>

          <div className="about-cta__buttons">
            <Link to="/contact" className="btn-primary">
              <CalendarCheck size={18} />
              <span>Schedule Consultation</span>
              <ArrowRight size={16} className="arrow-icon" />
            </Link>

            <a href={mailtoUrl} className="btn-outline">
              <Mail size={17} />
              <span>Email Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}