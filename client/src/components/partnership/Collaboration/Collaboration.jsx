import React from "react";
import { motion } from "framer-motion";
import {
  FiMessageCircle,
  FiSearch,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

import "./Collaboration.scss";

const steps = [
  {
    number: "01",
    icon: FiMessageCircle,
    title: "Connect",
    description:
      "Tell us about your business, capabilities and the opportunity you see.",
  },
  {
    number: "02",
    icon: FiSearch,
    title: "Explore",
    description:
      "Our teams identify where the strongest collaboration opportunities exist.",
  },
  {
    number: "03",
    icon: FiLayers,
    title: "Collaborate",
    description:
      "We define responsibilities, technology and a practical path forward.",
  },
  {
    number: "04",
    icon: FiTrendingUp,
    title: "Scale",
    description:
      "Together we deliver, learn and grow the relationship around results.",
  },
];

const Collaboration = () => {
  return (
    <section className="partnership-collaboration">
      <div className="partnership-collaboration__container">
        <motion.div
          className="partnership-collaboration__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span>HOW WE COLLABORATE</span>

            <h2>
              From first conversation
              <br />
              to <strong>shared growth.</strong>
            </h2>
          </div>

          <p>
            No complicated process. Just clear communication,
            aligned expectations and a shared focus on creating
            value.
          </p>
        </motion.div>

        <div className="partnership-collaboration__track">
          <div className="partnership-collaboration__line" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="collaboration-step"
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="collaboration-step__number">
                  {step.number}
                </div>

                <div className="collaboration-step__icon">
                  <Icon />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;