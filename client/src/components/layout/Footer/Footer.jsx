import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer__top">

          {/* Company */}

          <div className="footer__column footer__brand">

            <img
              src="/images/logo/Virotech_logo_transparent.png"
              alt="Virotech"
              className="footer__logo"
            />

            <p>
              Virotech Technologies builds modern cloud infrastructure,
              enterprise software, DevOps pipelines and AI-powered
              business solutions for startups and enterprises worldwide.
            </p>

          </div>

          {/* Company */}

          <div className="footer__column">

            <h4>Company</h4>

            <ul>

              <li><a href="/">Home</a></li>

              <li><a href="/about">About</a></li>

              <li><a href="/services">Services</a></li>

              <li><a href="/portfolio">Portfolio</a></li>

              <li><a href="/careers">Careers</a></li>

            </ul>

          </div>

          {/* Services */}

          <div className="footer__column">

            <h4>Services</h4>

            <ul>

              <li>Cloud Engineering</li>

              <li>Web Development</li>

              <li>AI Automation</li>

              <li>DevOps</li>

              <li>Consulting</li>

            </ul>

          </div>

          {/* Contact */}

          <div className="footer__column">

            <h4>Contact</h4>

            <ul>

              <li>support@virotech.in</li>

              <li>+91 XXXXXXX</li>

              <li>India</li>

            </ul>

          </div>

        </div>

        <div className="footer__bottom">

          <p>
            © {new Date().getFullYear()} Virotech Technologies.
            All Rights Reserved.
          </p>

          <div className="footer__social">

            <a href="https://in.linkedin.com/company/virotechtechnologies">LinkedIn</a>

            <a href="https://www.youtube.com/@virotech_pvt">Youtube</a>

            <a href="https://www.instagram.com/virotech_pvt/">Instagram</a>

          </div>

        </div>

      </div>

    </footer>
  );
}