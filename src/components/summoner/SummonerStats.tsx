import React from "react";
import "./summoner.css";

interface Props {
  played: number;
  wins: number;
  percentWins: number;
  top4: number;
  percentTop4: number;
  avgPlacement: number;
}
export const SummonerStats: React.FC<Props> = ({
  played,
  wins,
  percentWins,
  top4,
  percentTop4,
  avgPlacement,
}) => {
  let winsBlue: string = percentWins + "%";
  let winsWhite: string = 100 - percentWins + "%";

  let topBlue: string = percentTop4 + "%";
  let topWhite: string = 100 - percentTop4 + "%";

  let avgBlue: string = 100 * (1 - (avgPlacement - 1) / 7) + "%";
  let avgWhite: string = (100 * (avgPlacement - 1)) / 7 + "%";

  return (
    <div className="summoner-stats-wrapper">
      <h4>{played} games played</h4>
      <div className="summoner-stats-container">
        <div className="summoner-stats-inner">
          <div className="summoner-profile-bar-titles">
            <p className="body-small">Wins</p>
            <p className="body-small">
              {percentWins}% <span className="grey-text">({wins})</span>
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
              {percentTop4}% <span className="grey-text">({top4})</span>
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
