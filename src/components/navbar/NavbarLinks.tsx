import React from "react";
import { NavButton } from "../buttons/NavButton";
import "./navbar.css";

export const NavbarLinks: React.FC = () => {
  return (
    <div className="navbar-links-wrapper">
      <div className="navbar-links-container">
        <NavButton text="Comps" isSelected={true} link="" />
        <NavButton text="Augments" isSelected={false} link="" />
        <NavButton text="Units" isSelected={false} link="" />
        <NavButton text="Items" isSelected={false} link="" />
        <NavButton text="Team Builder" isSelected={false} link="" />
        <NavButton text="Leaderboards" isSelected={false} link="" />
        <NavButton text="Patch Notes" isSelected={false} link="" />
        <NavButton text="Loaded Dice" isSelected={false} link="" />
      </div>
    </div>
  );
};

export default NavbarLinks;
