import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCloud,
  FiLayers,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

import "./PartnershipModels.scss";

const models = [
  {
    number: "01",
    icon: FiCloud,
    title: "Technology Partners",
    text: "Bring technology, platforms or expertise to the table. We collaborate to create stronger solutions for shared customers.",
    tags: ["Cloud", "AI", "SaaS", "Integrations"],
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Agency Partners",
    text: "Extend your agency capabilities with a reliable technology team behind the scenes for design, development and delivery.",
    tags: ["White Label", "Development", "Engineering"],
  },
  {
    number: "03",
    icon: FiTarget,
    title: "Strategic Partners",
    text: "Work with us on new products, digital ventures and long-term opportunities where both teams can create something valuable.",
    tags: ["Ventures", "Products", "Innovation"],
  },
  {
    number: "04",
    icon: FiUsers,
    title: "Referral Partners",
    text: "Know a business that needs the right technology partner? Connect them with Virotech and grow together.",
    tags: ["Referrals", "Growth", "Business"],
  },
];

const PartnershipModels = () => {
  return (
    <section
      id="partnership-models"
      className="partnership-models"
    >
      <div className="partnership-models__container">
        <motion.div
          className="partnership-models__heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-label">
              PARTNERSHIP MODELS
            </span>

            <h2>
              Different strengths.
              <br />
              <span>One direction.</span>
            </h2>
          </div>

          <p>
            Partnerships work best when both sides bring
            something valuable. Choose the model that fits
            the opportunity.
          </p>
        </motion.div>

        <div className="partnership-models__grid">
          {models.map((model, index) => {
            const Icon = model.icon;

            return (
              <motion.article
                key={model.number}
                className="partnership-model"
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="partnership-model__top">
                  <span>{model.number}</span>

                  <div className="partnership-model__icon">
                    <Icon />
                  </div>
                </div>

                <div className="partnership-model__body">
                  <h3>{model.title}</h3>

                  <p>{model.text}</p>
                </div>

                <div className="partnership-model__tags">
                  {model.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="partnership-model__arrow">
                  <FiArrowUpRight />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnershipModels;