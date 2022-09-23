import React from "react";
import "./buttons.css";
import {Link} from 'react-router-dom'


interface Props {
  text: string;
  link: string;
  isSelected: boolean;
  path: string;
}

export const NavButton: React.FC<Props> = ({ text, link, isSelected, path }) => {
  if (!isSelected) {
    return (
      <div className="navbutton">
        <Link className="body" to={path}>{text}</Link>
      </div>
    );
  } else {
    return (
      <div className="navbutton-selected">
        <Link className="body" to={path}>{text}</Link>
      </div>
    );
  }
};
