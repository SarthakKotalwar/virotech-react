import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTAButton() {
  return (
    <Link
      to="/contact"
      className="navbar__cta"
      aria-label="Start your project with Virotech Technologies"
    >
      <span>Start Project</span>

      <FiArrowRight className="navbar__cta-icon" />
    </Link>
  );
}