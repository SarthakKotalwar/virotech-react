import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import "./ContactCTA.scss";

const ContactCTA = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.setProperty("--rx", `${y * -6}deg`);
    card.style.setProperty("--ry", `${x * 6}deg`);
    card.style.setProperty("--tx", `${x * 8}px`);
    card.style.setProperty("--ty", `${y * 8}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--tx", "0px");
    card.style.setProperty("--ty", "0px");
  };

  const scrollToContactForm = () => {
    const formElement =
      document.querySelector(".contact-form-wrapper") ||
      document.querySelector(".contact-main");
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section className="contact-cta">
      <div className="contact-cta__ambient-glow" />
      
      {/* Outer Grid Alignment Container */}
      <div className="container">
        <div
          ref={cardRef}
          className="contact-cta__card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="contact-cta__top">
            <span>05 / DEPLOYMENT READY</span>
            <span>VIROTECH ARCHITECTURE</span>
          </div>

          <div className="contact-cta__title">
            <span>Let's build</span>
            <strong>the future.</strong>
          </div>

          <button
            type="button"
            className="contact-cta__button"
            onClick={scrollToContactForm}
          >
            <span>Deploy Project</span>
            <span className="icon-wrapper">
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </span>
          </button>

          <div className="contact-cta__bottom">
            <span>3D RIGID BODY PHYSICS / FAST INFERENCE</span>
            <span>&gt;_ SYSTEM ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;