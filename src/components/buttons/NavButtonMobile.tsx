import React from "react";
import "./buttons.css";
import {Link} from 'react-router-dom'


interface Props {
  text: string;
  link: string;
  path: string;
  isSelected: boolean;
  index: number;
  handleSelection: (key: number) => void;
}

export const NavButtonMobile: React.FC<Props> = ({ text, link, isSelected, path, index, handleSelection}) => {
  if (!isSelected) {
    return (
      <div className="navbutton-mobile" onClick={() => handleSelection(index)}>
        <Link className="body" to={path} style={{textDecoration: "none"}}>{text}</Link>
      </div>
    );
  } else {
    return (
      <div className="navbutton-mobile navbutton-selected-mobile" onClick={() => handleSelection(index)}>
        <Link className="body" to={path} style={{textDecoration: "none", color: "#377DF7"}}>{text}</Link>
      </div>
    );
  }
};
