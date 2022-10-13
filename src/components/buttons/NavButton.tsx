import React from "react";
import "./buttons.css";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


interface Props {
  text: string;
  link: string;
  isSelected: boolean;
  path: string;
  index: number;
  handleSelection: (key: number) => void
}

export const NavButton: React.FC<Props> = ({ text, link, isSelected, path, index, handleSelection}) => {

  let navigate = useNavigate()

  function handleClick(){
    handleSelection(index)
    navigate(path)
  }

  if (!isSelected) {
    return (
      <div className="navbutton" onClick={() => handleClick()}>
        <Link to={path}>{text}</Link>
        {/* <a className="body" >{text}</a> */}
      </div>
    );
  } else {
    return (
      <div className="navbutton-selected">
        <a className="body" >{text}</a>
      </div>
    );
  }
};
