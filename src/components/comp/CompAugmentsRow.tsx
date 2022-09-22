import React from "react";
import "./comp.css";

interface Props {
  src: string;
  name: string;
  avgPlacement: number;
  winrate: number;
  frequency: number;
}

export const CompAugmentsRow: React.FC<Props> = ({
  src,
  name,
  avgPlacement,
  winrate,
  frequency,
}) => {
  var colors: string[] = [];

  if (avgPlacement < 3.7) {
    colors.push("body green");
  } else if (avgPlacement < 4.6) {
    colors.push("body yellow");
  } else {
    colors.push("body red");
  }

  //setting color of winrate
  if (winrate > 15) {
    colors.push("body green");
  } else if (winrate > 11) {
    colors.push("body yellow");
  } else {
    colors.push("body red");
  }

  return (
    <div className="augments-row-container">
      <div className="augment-name-container">
        <img src={src} alt="Augment"></img>
        <h4>{name}</h4>
      </div>
      <p className={`body augemnts-row-cell ${colors[0]}`}>{avgPlacement}</p>
      <p className={`body augemnts-row-cell ${colors[1]}`}>{winrate}</p>
      <p className="body augemnts-row-cell">{frequency}</p>
    </div>
  );
};

export default CompAugmentsRow;
