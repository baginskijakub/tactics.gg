import React from "react";
import "./summoner.css";

interface Props {
  name: string;
  region: string;
  icon: string;
  rank: string;
  lp: number;
  top: number;
  ranking: number;
  rankIcon: string;
}

export const SummonerProfile: React.FC<Props> = ({
  name,
  region,
  rank,
  lp,
  top,
  ranking,
  icon,
  rankIcon,
}) => {
  let blueWidth: number = 100 - top;
  let whiteWidth: number = top;
  let blueWidthString = blueWidth + "%";
  let whiteWidthString = whiteWidth + "%";

  return (
    <div className="summoner-profile-wrapper">
      <div className="summoner-profile-head">
        <img src={icon} alt="summoner icon"></img>
        <div className="summoner-profile-head-inner">
          <h2>{name}</h2>
          <p className="body">{region}</p>
        </div>
      </div>
      <div className="summoner-profile-secondary">
        <img src={rankIcon} alt={rank}></img>
        <div className="summoner-profile-secondary-inner">
          <div className="summoner-profile-secondary-in">
            <h4>{rank}</h4>
            <p className="body">{lp}LP</p>
          </div>
          <div className="summoner-profile-bar-container">
            <div className="summoner-profile-bar-titles">
              <p className="body-small">Top {top}%</p>
              <p className="body-small">#{ranking}</p>
            </div>
            <div className="summoner-profile-bar">
              <div
                className="summoner-profile-bar-blue"
                style={{ width: blueWidthString }}
              ></div>
              <div
                className="summoner-profile-bar-white"
                style={{ width: whiteWidthString }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};