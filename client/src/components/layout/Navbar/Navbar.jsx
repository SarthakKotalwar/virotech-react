import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar container">
        <NavLink to="/" end className="logo">Virotech</NavLink>
        <div className="nav-links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
