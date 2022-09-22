import React from "react";
import "./summoner.css";

interface Props {
  state: string;
}

export const SummonerPlaceholder: React.FC<Props> = ({ state }) => {
  if (state === "notFound") {
    return (
      <div className="summoner-placeholder-wrapper">
        <h3>Summoner not found</h3>
        <h4>We weren't able to find this player.</h4>
      </div>
    );
  } else if (state === "notSearched") {
    return (
      <div className="summoner-placeholder-wrapper">
        <h3>Search summoner</h3>
        <h4></h4>
      </div>
    );
  } else {
    return (
      <div className="summoner-placeholder-wrapper">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }
};

export default SummonerPlaceholder;
