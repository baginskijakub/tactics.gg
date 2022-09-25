import React from "react";
import "./buttons.css";
import {Link} from 'react-router-dom'


interface Props {
  text: string;
  link: string;
  isSelected: boolean;
  path: string;
  index: number;
  handleSelection: (key: number) => void
}

export const NavButton: React.FC<Props> = ({ text, link, isSelected, path, index, handleSelection}) => {
  if (!isSelected) {
    return (
      <div className="navbutton" onClick={() => handleSelection(index)}>
        <Link className="body" to={path}>{text}</Link>
      </div>
    );
  } else {
    return (
      <div className="navbutton-selected" onClick={() => handleSelection(index)}>
        <Link className="body" to={path}>{text}</Link>
      </div>
    );
  }
};
