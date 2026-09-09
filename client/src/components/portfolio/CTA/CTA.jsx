import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, CalendarCheck } from "lucide-react";
import Reveal from "../../common/Reveal/Reveal";
import "./CTA.scss";

export default function CTA() {
  const emailAddress = "support@virotech.in";
  const emailSubject = encodeURIComponent("Project Consultation - Virotech Technologies");
  const emailBody = encodeURIComponent(
    "Hello Virotech Team,\n\nI would like to discuss our project goals with your engineering team.\n\n"
  );

  // Direct mailto protocol triggers the OS/browser native email selection popup
  const mailtoUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="portfolio-cta">
      <div className="container">
        <Reveal>
          <div className="portfolio-cta__card">
            {/* Background Ambient Circles */}
            <div className="portfolio-cta__circle portfolio-cta__circle--1" />
            <div className="portfolio-cta__circle portfolio-cta__circle--2" />

            <span className="section-tag">LET'S BUILD TOGETHER</span>

            <h2>
              Have A Project <span>In Mind?</span>
            </h2>

            <p>
              Whether you're planning a modern website, enterprise application,
              Shopify store, AI-powered solution, or cloud infrastructure, our
              team is ready to transform your ideas into exceptional digital
              experiences.
            </p>

            <div className="portfolio-cta__buttons">
              {/* Button 1: Routes to Contact Page */}
              <Link to="/contact" className="btn-primary">
                <CalendarCheck size={18} />
                <span>Start Your Project</span>
                <ArrowRight size={16} className="arrow-icon" />
              </Link>

              {/* Button 2: Native OS Mailbox Protocol */}
              <a href={mailtoUrl} className="btn-outline">
                <Mail size={17} />
                <span>Email Us Directly</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}