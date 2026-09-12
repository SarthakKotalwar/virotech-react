import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiLayers,
  FiCloud,
  FiZap,
} from "react-icons/fi";

import "./PartnershipCTA.scss";

const PartnershipCTA = () => {
  return (
    <section className="partnership-cta">
      <div className="partnership-cta__container">
        <motion.div
          className="partnership-cta__panel"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="partnership-cta__content">
            <span className="partnership-cta__label">
              HAVE AN OPPORTUNITY?
            </span>

            <h2>
              Let’s create
              <br />
              <span>something stronger.</span>
            </h2>

            <p>
              Tell us what you have in mind. Whether you're
              looking for a technology partner, delivery team,
              strategic collaboration or a new business
              opportunity, let's explore it together.
            </p>

            <a
              href="/contact"
              className="partnership-cta__button"
            >
              Start a Partnership

              <FiArrowUpRight />
            </a>
          </div>

          <div className="partnership-cta__visual">
            <div className="cta-orbit cta-orbit--one" />
            <div className="cta-orbit cta-orbit--two" />
            <div className="cta-orbit cta-orbit--three" />

            <div className="cta-core">
              <div>
                <FiLayers />
              </div>
            </div>

            <span className="cta-floating cta-floating--one">
              <FiCloud />
              Technology
            </span>

            <span className="cta-floating cta-floating--two">
              <FiZap />
              Growth
            </span>

            <span className="cta-floating cta-floating--three">
              Strategy
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipCTA;