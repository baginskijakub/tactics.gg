import React from "react";
import "./trait.css";
import bronzeBackground from "../../images/icons/trait-background-bronze.svg";
import silverBackground from "../../images/icons/trait-background-silver.svg";
import goldBackground from "../../images/icons/trait-background-gold.svg";
import chromaticBackground from "../../images/icons/trait-background-chromatic.svg";
import traitIcon from "../../images/traits/jade.svg";

interface Props {
  size: "small" | "big";
  hasValue: boolean;
  hasLabel: boolean;
  name: string;
  currentTrait: number;
  traitStyle: number;
  url: string;
}

export const Trait: React.FC<Props> = ({
  size,
  hasLabel,
  hasValue,
  name,
  currentTrait,
  traitStyle,
  url,
}) => {
  var background: string;
  var backgroundColor: string;
  switch (traitStyle) {
    case 0:
    case 1:
      background = bronzeBackground;
      backgroundColor = "#775A43";
      break;
    case 2:
      background = silverBackground;
      backgroundColor = "#737E81";
      break;
    case 3:
      background = goldBackground;
      backgroundColor = "#A48B4D";
      break;
    case 4:
      background = chromaticBackground;
      backgroundColor = "#AEB0D9";
      break;
    default:
      background = bronzeBackground;
      backgroundColor = "#775A43";
  }
  if (size === "small") {
    return (
      <div className="trait-small-container">
        <div
          className="trait-hex-small"
          style={{ backgroundImage: `url(${background})` }}
        >
          <img className="trait-small-icon" src={url} alt="trait"></img>
        </div>
        {hasValue && (
          <div
            className="trait-small-value-container"
            style={{ backgroundColor: `${backgroundColor}` }}
          >
            <h6>{currentTrait}</h6>
          </div>
        )}
        {hasLabel && <h6>{name}</h6>}
      </div>
    );
  } else {
    return (
      <div className="trait-big-container">
        <div
          className="trait-hex-big"
          style={{ backgroundImage: `url(${background})` }}
        >
          <img className="trait-big-icon" src={url} alt="trait"></img>
        </div>
        {hasValue && (
          <div
            className="trait-big-value-container"
            style={{ backgroundColor: `${backgroundColor}` }}
          >
            <h5>{currentTrait}</h5>
          </div>
        )}
        {hasLabel && <h4>{name}</h4>}
      </div>
    );
  }
};

export default Trait;
