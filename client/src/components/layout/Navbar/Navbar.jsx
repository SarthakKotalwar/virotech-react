import "./Navbar.scss";

import NavbarLogo from "./NavbarLogo";
import DesktopMenu from "./DesktopMenu";
import CTAButton from "./CTAButton";
import MobileMenu from "./MobileMenu";
import useNavbar from "./useNavbar";

export default function Navbar() {

  const {
    scrolled,
    mobileOpen,
    setMobileOpen,
  } = useNavbar();

  return (

    <header
      className={`navbar ${
        scrolled ? "navbar--scrolled" : ""
      }`}
    >

      <div className="navbar__wrapper">

        <div className="navbar__left">

          <NavbarLogo />

        </div>

        <div className="navbar__center">

          <DesktopMenu />

        </div>

        <div className="navbar__right">

          <CTAButton />

          <MobileMenu
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />

        </div>

      </div>

    </header>

  );

}