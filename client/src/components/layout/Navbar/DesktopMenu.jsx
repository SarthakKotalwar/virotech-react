import { NavLink } from "react-router-dom";
import navigationData from "./NavigationData";

export default function DesktopMenu() {
  return (
    <nav className="navbar__desktop">
      <ul className="navbar__menu">
        {navigationData.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "active" : ""
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