import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
import MenuList from "./MenuList";

const { logo, navItems: items, callText, phone, phoneHref } = headerData;

const Header = ({ mainMenuClass = "", navItems = items, onePage = false }) => {
  const { scrollTop } = useScroll(100);
  const { toggleMenu, toggleSearch } = useRootContext();

  const handleToggleSearch = () => {
    toggleSearch();
    toggleMenu(false);
    document.body.classList.toggle("locked");
  };

  const handleToggleMenu = () => {
    document.body.classList.toggle("locked");
    toggleMenu();
  };

  return (
    <header className="main-header clearfix">
      <nav
        className={`${
          scrollTop
            ? "stricky-header stricked-menu stricky-fixed slideInDown"
            : "slideIn"
        } main-menu ${mainMenuClass} animated clearfix`}
      >
        <div
          className={`main-menu-wrapper clearfix${
            scrollTop ? " sticky-header__content" : ""
          }`}
        >
          <div className="main-menu-wrapper__left">
            <div className="main-menu-wrapper__logo">
              <Link href="/">
                <Image src={logo.src} alt="Köksal Partners Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper__main-menu">
              <a onClick={handleToggleMenu} className="mobile-nav__toggler">
                <i className="fa fa-bars"></i>
              </a>
              {/* Pass isMainHeader prop to MenuList */}
              <MenuList navItems={navItems} isMainHeader={false} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;