import "./CTA.scss";

import { FiArrowRight, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import Reveal from "../../common/Reveal/Reveal";

export default function CTA() {
  return (
    <section className="portfolio-cta">

      <div className="container">

        <Reveal>

          <div className="portfolio-cta__card">

            {/* Background Shapes */}

            <div className="portfolio-cta__circle portfolio-cta__circle--1"></div>
            <div className="portfolio-cta__circle portfolio-cta__circle--2"></div>

            <span className="section-tag">
              LET'S BUILD TOGETHER
            </span>

            <h2>
              Have A Project
              <span> In Mind?</span>
            </h2>

            <p>
              Whether you're planning a modern website,
              enterprise application, Shopify store,
              AI-powered solution, or cloud infrastructure,
              our team is ready to transform your ideas into
              exceptional digital experiences.
            </p>

            <div className="portfolio-cta__buttons">

              <Link
                to="/contact"
                className="btn-primary"
              >
                Start Your Project
                <FiArrowRight />
              </Link>

              <a
                href="mailto:info@virotech.in"
                className="btn-secondary"
              >
                <FiMail />
                Email Us
              </a>

            </div>

        </div>

        </Reveal>

      </div>

    </section>
  );
}