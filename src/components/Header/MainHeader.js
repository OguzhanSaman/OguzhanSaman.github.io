import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
import MenuList from "./MenuList";

const { navItems: items, callText, phone, phoneHref, logo, logoblck } = headerData;


const MainHeader = ({ mainMenuClass = "", navItems = items, onePage = false }) => {
  const [scrollColor, setScrollColor] = useState(false); // Initialize scrollColor to true
  const { scrollTop } = useScroll(100);
  const { toggleMenu, toggleSearch } = useRootContext();

  useEffect(() => {
    if (scrollTop > 0) {
      setScrollColor(true); // Set scrollColor to false when the user starts scrolling
    } else {
      setScrollColor(false); // Set scrollColor to true when the user is at the top of the page
    }
  }, [scrollTop]);

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
              scrollColor
                ? "stricky-header stricked-menu stricky-fixed slideInDown"
                : "slideIn"
            } main-menu ${mainMenuClass} animated clearfix`}
          >
            <div
              className={`main-menu-wrapper clearfix${
                scrollColor ? " sticky-header__content" : ""
              }`}
            >
              <div className="main-menu-wrapper__left">
                <div className="main-menu-wrapper__logo">
                  <Link href="/">
                    <Image src={scrollColor ? logo.src : logoblck.src} alt="Köksal Partners Logo" />
                  </Link>
                </div>
                <div className="main-menu-wrapper__main-menu">
                  <a onClick={handleToggleMenu} className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                  {/* Pass isMainHeader prop to MenuList */}
                  <MenuList navItems={navItems} isMainHeader={true} />
                </div>
              </div>
            </div>
          </nav>
        </header>
      );
    };
    
    export default MainHeader;
    