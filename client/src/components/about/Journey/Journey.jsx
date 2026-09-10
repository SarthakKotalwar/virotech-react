import React, { useState, useEffect, useRef, useCallback } from "react";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import journeyData from "./JourneyData";
import "./Journey.scss";

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = journeyData.timeline.length;

  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragDistance = useRef(0);
  const timerRef = useRef(null);

  const nextStep = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevStep = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Ambient Auto-Slider
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextStep();
    }, 4500);

    return () => clearInterval(timerRef.current);
  }, [isPaused, nextStep]);

  // Touch & Drag Handlers
  const handleStart = (clientX) => {
    isDragging.current = true;
    startX.current = clientX;
    dragDistance.current = 0;
    setIsPaused(true);
  };

  const handleMove = (clientX) => {
    if (!isDragging.current) return;
    dragDistance.current = clientX - startX.current;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsPaused(false);

    if (dragDistance.current < -45) {
      nextStep();
    } else if (dragDistance.current > 45) {
      prevStep();
    }
  };

  return (
    <section
      className="journey-runway about-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="about-container">
        {/* Header */}
        <div className="about-section-header">
          <span className="about-section-tag">{journeyData.badge}</span>
          <h2>
            Milestones That <span>Define</span> Our Trajectory
          </h2>
          <p>{journeyData.description}</p>
        </div>

        {/* Stepper Progress Bar */}
        <div className="runway-nav">
          <div className="runway-nav__track" />
          <div
            className="runway-nav__fill"
            style={{ width: `${(activeIndex / (total - 1)) * 100}%` }}
          />

          <div className="runway-nav__nodes">
            {journeyData.timeline.map((item, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              return (
                <button
                  type="button"
                  key={index}
                  className={`runway-node-btn ${isActive ? "active" : ""} ${isPast ? "past" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Jump to ${item.year}`}
                >
                  <span className="runway-node-dot" />
                  <span className="runway-node-year">{item.year}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Crisp Runway Stage (Eliminates GPU text blur) */}
        <div
          className="runway-deck"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
        >
          <div className="runway-deck__stage">
            {journeyData.timeline.map((item, index) => {
              const Icon = item.icon;

              let diff = index - activeIndex;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const isCurrent = diff === 0;
              const isPrev = diff === -1;
              const isNext = diff === 1;

              let cardState = "hidden";
              if (isCurrent) cardState = "active";
              else if (isPrev) cardState = "prev";
              else if (isNext) cardState = "next";

              return (
                <article
                  key={index}
                  className={`runway-card runway-card--${cardState}`}
                  onClick={() => {
                    if (isNext) nextStep();
                    if (isPrev) prevStep();
                  }}
                >
                  <div className="runway-card__top">
                    <div className="runway-card__icon">
                      <Icon />
                    </div>
                    <div className="runway-card__year-badge">
                      <FiCalendar />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  <span className="runway-card__meta">PHASE // 0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="runway-controls">
            <button
              type="button"
              className="runway-ctrl-btn"
              onClick={prevStep}
              aria-label="Previous Milestone"
            >
              <FiChevronLeft />
            </button>
            <div className="runway-counter">
              <span>0{activeIndex + 1}</span> / 0{total}
            </div>
            <button
              type="button"
              className="runway-ctrl-btn"
              onClick={nextStep}
              aria-label="Next Milestone"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}