import React from "react";
import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo/ContactInfo";
import ContactForm from "../../components/contact/ContactForm/ContactForm";
import ContactProcess from "../../components/contact/ContactProcess/ContactProcess";
import ContactCTA from "../../components/contact/ContactCTA/ContactCTA";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact-page">
      <ContactHero />

      {/* Section 2: Two-column configuration grid */}
      <section className="contact-main" id="contact-main">
        <div className="contact-main__container">
          <div className="contact-main__header">
            <span className="contact-main__tag">DIRECT COLLABORATION</span>
            <h2>
              Start with <span>an idea.</span>
            </h2>
            <p>
              Tell us about your business challenges, technical objectives, or product roadmap.
            </p>
          </div>

          <div className="contact-main__grid">
            {/* Left Column: Direct channels */}
            <ContactInfo />

            {/* Right Column: Interactive configuration form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactProcess />
      <ContactCTA />
    </div>
  );
}