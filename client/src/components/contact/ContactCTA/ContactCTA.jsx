import React, { useRef, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ContactCTA.scss";

export default function ContactCTA() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let isInteracting = false;

    const updateCardRotation = (clientX, clientY) => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Restrained subtle tilt (max ~5.5deg)
      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      const tx = ((x - centerX) / centerX) * 4;
      const ty = ((y - centerY) / centerY) * 4;

      card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
      card.style.setProperty("--tx", `${tx.toFixed(2)}px`);
      card.style.setProperty("--ty", `${ty.toFixed(2)}px`);
    };

    const resetCard = () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--tx", "0px");
      card.style.setProperty("--ty", "0px");
    };

    // Desktop Mouse Handlers
    const handleMouseMove = (e) => updateCardRotation(e.clientX, e.clientY);
    const handleMouseLeave = () => resetCard();

    // Mobile Touch Handlers
    const handleTouchStart = (e) => {
      isInteracting = true;
      if (e.touches[0]) updateCardRotation(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (!isInteracting || !e.touches[0]) return;
      updateCardRotation(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchEnd = () => {
      isInteracting = false;
      resetCard();
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("touchstart", handleTouchStart, { passive: true });
    card.addEventListener("touchmove", handleTouchMove, { passive: true });
    card.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("touchstart", handleTouchStart);
      card.removeEventListener("touchmove", handleTouchMove);
      card.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="contact-cta" id="contact-cta">
      <div className="contact-cta__ambient-glow" />

      <div className="container">
        <div className="contact-cta__perspective-wrapper">
          <div className="contact-cta__card" ref={cardRef}>
            {/* Top Status */}
            <div className="contact-cta__top">
              <span className="meta-left">05 / DEPLOYMENT READY</span>
              <span className="meta-right">VIROTECH ARCHITECTURE</span>
            </div>

            {/* Parallax Depth Title */}
            <div className="contact-cta__title">
              <span>Let's build</span>
              <strong>the future.</strong>
            </div>

            {/* Deploy Button */}
            <Link to="/contact" className="contact-cta__button">
              <span>Deploy Project</span>
              <span className="btn-circle">
                <FiArrowUpRight />
              </span>
            </Link>

            {/* Bottom Status */}
            <div className="contact-cta__bottom">
              <span className="meta-left">3D RIGID BODY PHYSICS / FAST INFERENCE</span>
              <span className="meta-right">&gt;_ SYSTEM ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}