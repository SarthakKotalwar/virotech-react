import "./ContactCTA.scss";

export default function ContactCTA() {

  return (

    <section className="contact-cta">

      <div className="contact-cta__circle contact-cta__circle--one"></div>
      <div className="contact-cta__circle contact-cta__circle--two"></div>

      <div className="container">

        <div className="contact-cta__content">

          <span className="section-tag">
            LET'S BUILD TOGETHER
          </span>

          <h2>

            Ready to Transform
            <br />
            Your Business?

          </h2>

          <p>

            Whether you're planning cloud migration,
            DevOps automation, AI integration,
            or a custom software solution,
            our experts are ready to help you.

          </p>

          <div className="contact-cta__buttons">

            <a
              href="/contact"
              className="btn-primary"
            >
              Schedule Consultation
            </a>

            <a
              href="/contact"
              className="btn-outline"
            >
              Contact Us
            </a>

          </div>

        </div>

      </div>

    </section>

  );

}