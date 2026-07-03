import { Link } from "react-router-dom";

export default function NavbarLogo() {
  return (
    <Link to="/" className="navbar__logo" aria-label="Virotech Technologies">
      <img
        src="/images/logo/logo.png"
        alt="Virotech Technologies Logo"
      />
    </Link>
  );
}