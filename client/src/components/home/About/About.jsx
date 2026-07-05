import "./About.scss";

export default function About() {
  return (
    <section className="about">

      <div className="container about__container">

        <div className="about__left">

          <span className="section-tag">
            ABOUT VIROTECH
          </span>

          <h2>
            Engineering Reliable
            Digital Solutions
            For Modern Businesses.
          </h2>

          <p>
            Virotech Technologies combines cloud engineering,
            enterprise software development and AI automation
            to help businesses build scalable, secure and
            future-ready digital products.
          </p>

          <ul className="about__features">

            <li>☁️ Cloud Infrastructure & AWS</li>

            <li>⚙️ DevOps & CI/CD Automation</li>

            <li>🤖 AI Powered Business Solutions</li>

            <li>🔒 Enterprise Security Standards</li>

          </ul>

          <a
            href="/about"
            className="btn-primary"
          >
            Learn More
          </a>

        </div>

        <div className="about__right">

          <div className="about-card">
            <h3>100+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="about-card">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="about-card">
            <h3>8+</h3>
            <p>Years Experience</p>
          </div>

          <div className="about-card">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>

        </div>

      </div>

    </section>
  );
}