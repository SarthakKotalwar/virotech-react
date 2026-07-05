import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTAButton() {
  return (
    <Link
      to="/contact"
      className="navbar__cta"
    >
      Start Project

      <FiArrowRight />
    </Link>
  );
}