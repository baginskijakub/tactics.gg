import React from "react";
import { NavButton } from "../buttons/NavButton";
import "./navbar.css";

export const NavbarLinks: React.FC = () => {
  return (
    <div className="navbar-links-wrapper">
      <div className="navbar-links-container">
        <NavButton text="Comps" isSelected={true} link="" path="" />
        <NavButton text="Team Builder" isSelected={false} link="" path="/" />
        <NavButton text="Summoner Search " isSelected={false} link="" path="/summoner" />
        <NavButton text="Units" isSelected={false} link="" path="" />
        <NavButton text="Items" isSelected={false} link="" path="" />
        <NavButton text="Leaderboards" isSelected={false} link="" path="" />
        <NavButton text="Patch Notes" isSelected={false} link="" path="" />
        <NavButton text="Loaded Dice" isSelected={false} link="" path="" />
      </div>
    </div>
  );
};

export default NavbarLinks;
