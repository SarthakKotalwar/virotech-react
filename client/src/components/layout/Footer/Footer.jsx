import { useNavigate, useLocation } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, path, hash) => {
    e.preventDefault();

    if (path === "/services" && hash) {
      const targetId = hash.replace("#", "");

      if (location.pathname !== "/services") {
        navigate("/services");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const navbarHeight = 100;
            const pos = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: pos, behavior: "smooth" });
          }
        }, 150);
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          const navbarHeight = 100;
          const pos = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: pos, behavior: "smooth" });
          window.history.pushState(null, "", `/services${hash}`);
        }
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Company Brand */}
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

          {/* Company Links (Privacy Policy removed from here) */}
          <div className="footer__column">
            <h4>Company</h4>
            <ul>
              <li><a href="/" onClick={(e) => handleNavClick(e, "/", "")}>Home</a></li>
              <li><a href="/about" onClick={(e) => handleNavClick(e, "/about", "")}>About</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, "/services", "")}>Services</a></li>
              <li><a href="/portfolio" onClick={(e) => handleNavClick(e, "/portfolio", "")}>Portfolio</a></li>
              <li><a href="/partnership" onClick={(e) => handleNavClick(e, "/partnership", "")}>Partnership</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer__column">
            <h4>Services</h4>
            <ul>
              <li><a href="/services#cloud-engineering" onClick={(e) => handleNavClick(e, "/services", "#cloud-engineering")}>Cloud Engineering</a></li>
              <li><a href="/services#web-development" onClick={(e) => handleNavClick(e, "/services", "#web-development")}>Web Development</a></li>
              <li><a href="/services#ai-automation" onClick={(e) => handleNavClick(e, "/services", "#ai-automation")}>AI Automation</a></li>
              <li><a href="/services#devops" onClick={(e) => handleNavClick(e, "/services", "#devops")}>DevOps</a></li>
              <li><a href="/services#enterprise-solutions" onClick={(e) => handleNavClick(e, "/services", "#enterprise-solutions")}>Enterprise Solutions</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer__column">
            <h4>Contact</h4>
            <ul>
              <li>support@virotech.in</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p>© {new Date().getFullYear()} Virotech Technologies. All Rights Reserved.</p>
            <a href="/privacy-policy" onClick={(e) => handleNavClick(e, "/privacy-policy", "")} className="footer__privacy-link">
              Privacy Policy
            </a>
          </div>
          <div className="footer__social">
            <a href="https://in.linkedin.com/company/virotechtechnologies" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com/@virotech_pvt" target="_blank" rel="noopener noreferrer">Youtube</a>
            <a href="https://www.instagram.com/virotech_pvt/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}