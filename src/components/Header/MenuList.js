import React from "react";
import NavItem from "./NavItem";

const MenuList = ({ navItems = [], mobile = false, onePage = false, isMainHeader }) => {
  // Define the class name for menu items based on the header type
  const menuClass = isMainHeader ? "main-header-menu" : "header-menu";

  return (
    <ul className={`main-menu__list ${menuClass}`}>
      {navItems.map((navItem) => (
        <NavItem
          key={navItem.id}
          navItem={navItem}
          mobile={mobile}
          onePage={onePage}
          isMainHeader={isMainHeader} // Pass the isMainHeader prop to NavItem
        />
      ))}
    </ul>
  );
};

export default MenuList;
