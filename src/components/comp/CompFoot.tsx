import React from "react";
import "./comp.css";

interface Props {
  avgPlacement: number;
  top4Ratio: number;
  winrate: number;
  playrate: number;
}

export const CompFoot: React.FC<Props> = ({
  avgPlacement,
  top4Ratio,
  winrate,
  playrate,
}) => {
  var colors: string[] = [];

  //setting color of avg placement
  if (avgPlacement < 4.2) {
    colors.push("body-small green");
  } else if (avgPlacement < 4.7) {
    colors.push("body-small yellow");
  } else {
    colors.push("body-small red");
  }

  //setting color of top 4 ratio
  if (top4Ratio > 55) {
    colors.push("body-small green");
  } else if (top4Ratio > 45) {
    colors.push("body-small yellow");
  } else {
    colors.push("body-small red");
  }

  //setting color of winrate
  if (winrate > 15) {
    colors.push("body-small green");
  } else if (winrate > 11) {
    colors.push("body-small yellow");
  } else {
    colors.push("body-small red");
  }

  //setting color of playrate
  if (playrate < 0.5) {
    colors.push("body-small green");
  } else if (playrate < 0.8) {
    colors.push("body-small yellow");
  } else {
    colors.push("body-small red");
  }

  let isMobile = false;
  if (window.innerWidth < 500) {
    isMobile = true;
  }

  let avg: string = "Average Place";

  if (window.innerWidth < 500) {
    avg = "Avg. Place";
  }

  return (
    <div className="comp-foot-wrapper">
      <div className="comp-foot-inner">
        <p className="body-small">{avg}:</p>
        <p className={colors[0]}>{avgPlacement}</p>
      </div>
      <div className="comp-foot-inner">
        <p className="body-small">TOP4 Rate:</p>
        <p className={colors[1]}>{top4Ratio}%</p>
      </div>
      <div className="comp-foot-inner">
        <p className="body-small">Win Rate:</p>
        <p className={colors[2]}>{winrate}%</p>
      </div>
      {!isMobile && (
        <div className="comp-foot-inner">
          <p className="body-small">Play Rate:</p>
          <p className={colors[3]}>{playrate}</p>
        </div>
      )}
    </div>
  );
};
