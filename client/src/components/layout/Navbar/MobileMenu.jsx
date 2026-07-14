import { NavLink } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiArrowRightCircle } from "react-icons/fi";
import navigationData from "./NavigationData";
import NavbarLogo from "./NavbarLogo";

export default function MobileMenu({
  mobileOpen,
  setMobileOpen,
}) {
  return (
    <>
      {/* Hamburger Button */}

      <button
          className={`navbar__toggle ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
      </button>

      {/* Overlay */}

      <div
        className={`mobile-overlay ${
          mobileOpen ? "active" : ""
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}

      <aside
        className={`mobile-menu ${
          mobileOpen ? "active" : ""
        }`}
      >
        {/* Header */}

        <div className="mobile-menu__header">

          <NavbarLogo />

          <button
            className="mobile-menu__close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
          >
          </button>

        </div>

        {/* Navigation */}

        <nav className="mobile-menu__nav">

          <ul>

            {navigationData.map((item) => (

              <li key={item.path}>

                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>

              </li>

            ))}

          </ul>

        </nav>

        {/* Footer CTA */}

        <div className="mobile-menu__footer">

          <NavLink
            to="/contact"
            className="mobile-menu__cta"
            onClick={() => setMobileOpen(false)}
          >
            <span>Start Project</span>

            <FiArrowRight />

          </NavLink>

        </div>

      </aside>
    </>
  );
}