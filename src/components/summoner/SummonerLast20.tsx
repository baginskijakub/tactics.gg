import React from "react";
import "./summoner.css";
import {SummonerLastSquare} from "./SummonerLastSquare";

interface Props {
  placements: number[];
  avgPlacement: number;
  top4Placements: number;
  top4Procentage: number;
  wins: number;
  winsProcentage: number;
}

export const SummonerLast20: React.FC<Props> = ({
  placements,
  avgPlacement,
  top4Placements,
  top4Procentage,
  wins,
  winsProcentage,
}) => {
  let first: number[] = placements.slice(0, 9);
  let second: number[] = placements.slice(10, 19);

  let winsBlue: string = winsProcentage + "%";
  let winsWhite: string = 100 - winsProcentage + "%";

  let topBlue: string = top4Procentage + "%";
  let topWhite: string = 100 - top4Procentage + "%";

  let avgBlue: string = 100 * (1 - (avgPlacement - 1) / 7) + "%";
  let avgWhite: string = (100 * (avgPlacement - 1)) / 7 + "%";

  return (
    <div className="summoner-last-wrapper">
      <h4>Match history</h4>
      <div className="summoner-last-squares-wrapper">
        <div className="summoner-last-squares-container">
          {first.map((element) => {
            return <SummonerLastSquare placement={element} />;
          })}
        </div>
        <div className="summoner-last-squares-container">
          {second.map((element) => {
            return <SummonerLastSquare placement={element} />;
          })}
        </div>
      </div>
      <div className="summoner-stats-container">
        <div className="summoner-stats-inner">
          <div className="summoner-profile-bar-titles">
            <p className="body-small">Wins</p>
            <p className="body-small">
              {winsProcentage}% <span className="grey-text">({wins})</span>
            </p>
          </div>
          <div className="summoner-profile-bar">
            <div
              className="summoner-profile-bar-blue"
              style={{ width: winsBlue }}
            ></div>
            <div
              className="summoner-profile-bar-white"
              style={{ width: winsWhite }}
            ></div>
          </div>
        </div>
        <div className="summoner-stats-inner">
          <div className="summoner-profile-bar-titles">
            <p className="body-small">Top4</p>
            <p className="body-small">
              {top4Procentage}%{" "}
              <span className="grey-text">({top4Placements})</span>
            </p>
          </div>
          <div className="summoner-profile-bar">
            <div
              className="summoner-profile-bar-blue"
              style={{ width: topBlue }}
            ></div>
            <div
              className="summoner-profile-bar-white"
              style={{ width: topWhite }}
            ></div>
          </div>
        </div>
        <div className="summoner-stats-inner">
          <div className="summoner-profile-bar-titles">
            <p className="body-small">Average Placement</p>
            <p className="body-small">{avgPlacement}</p>
          </div>
          <div className="summoner-profile-bar">
            <div
              className="summoner-profile-bar-blue"
              style={{ width: avgBlue }}
            ></div>
            <div
              className="summoner-profile-bar-white"
              style={{ width: avgWhite }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
