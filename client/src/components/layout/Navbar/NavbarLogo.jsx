import { Link } from "react-router-dom";

export default function NavbarLogo() {
  return (
    <Link
      to="/"
      className="navbar__logo"
    >
      <img
        className="navbar__logo-image"
        src="/images/logo/logo.png"
        alt="Virotech Technologies"
      />
    </Link>
  );
}