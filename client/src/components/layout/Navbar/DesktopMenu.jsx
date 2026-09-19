import { NavLink } from "react-router-dom";
import navigationData from "./NavigationData";

export default function DesktopMenu() {
  return (
    <nav className="navbar__desktop" aria-label="Primary Navigation">
      <ul className="navbar__menu">
        {navigationData.map((item) => (
          <li key={item.path} className="navbar__item">
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}