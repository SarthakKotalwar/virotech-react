import "./Navbar.scss";

import NavbarLogo from "./NavbarLogo";
import DesktopMenu from "./DesktopMenu";
import CTAButton from "./CTAButton";
import MobileMenu from "./MobileMenu";
import useNavbar from "./useNavbar";

export default function Navbar() {
  const { scrolled } = useNavbar();

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__wrapper">

        <NavbarLogo />

        <DesktopMenu />

        <CTAButton />

        <MobileMenu />

      </div>
    </header>
  );
}