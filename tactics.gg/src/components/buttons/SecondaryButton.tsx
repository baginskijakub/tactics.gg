import React from "react";
import "./buttons.css";

interface Props {
  text: string;
  fn?: () => void;
}

export const SecondaryButton: React.FC<Props> = ({ text, fn }) => {

  function handleClick(){
    console.log("button clicked")
    if(fn !== undefined){
          fn();
    }
    else{
      console.log("nie doszlo do buttona")
    }

  }

  return (
    <div className="secondary-button" onClick={handleClick}>
      <p className="body">{text}</p>
    </div>
  );
};
