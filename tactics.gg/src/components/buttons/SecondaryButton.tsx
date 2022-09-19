import React from "react";
import "./buttons.css";

interface Props {
  text: string;
  fn?: () => void;
}

export const SecondaryButton: React.FC<Props> = ({ text, fn }) => {
  return (
    <div className="secondary-button">
      <p className="body">{text}</p>
    </div>
  );
};
