import React from "react";
import "./buttons.css";

interface Props {
  text: string;
  fn?: () => void;
}

export const SecondaryButton: React.FC<Props> = ({ text, fn }) => {

  function handleClick(){
    if(fn !== undefined){
          fn();
    }
  }

  return (
    <div className="secondary-button" onClick={handleClick}>
      <p className="body">{text}</p>
    </div>
  );
};
