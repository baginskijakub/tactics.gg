import React from "react";
import "./summoner.css";
import goldIcon from "../../images/icons/gold.svg";
import {Unit} from "../unit/Unit";
import {Trait} from "../trait/Trait";

interface Item {
  id: number;
  name: string;
  url: string;
}

interface Trait {
  name: string;
  currentTrait: number;
  traitStyle: number;
  url: string;
}

interface Unit {
  id: number;
  name: string;
  cost: number;
  url: string;
  level: 0 | 1 | 2 | 3;
  items: Item[] | null;
}

interface Props {
  placement: number;
  icon: string;
  name: string;
  roundEliminated: string;
  augments: string[];
  traits: Trait[];
  units: Unit[];
  goldLeft: number;
}

export const SummonerMatchRow: React.FC<Props> = ({
  placement,
  icon,
  name,
  roundEliminated,
  augments,
  traits,
  units,
  goldLeft,
}) => {
  let placementEnd: string = "th";
  let placementBar: string = "bottom-bar";
  if (placement === 1) {
    placementEnd = "st";
    placementBar = "first";
  } else if (placement === 2) {
    placementEnd = "nd";
    placementBar = "second";
  } else if (placement === 3) {
    placementEnd = "rd";
    placementBar = "third";
  } else if (placement === 4) {
    placementBar = "fourth";
  }

  let isMobile: boolean = false;
  if (window.innerWidth < 850) {
    isMobile = true;
  }

  return (
    <div className="summoner-match-row-wrapper">
      <span className={`summoner-match-row-bar ${placementBar}`}></span>
      <div className="summoner-match-placement-summoner">
        <h4 className="summoner-match-row-placement">
          {placement}
          {placementEnd}
        </h4>
        <div className="summoner-match-row-summoner-container">
          {!isMobile && <img src={icon} alt="summoner icon" />}
          <h5>{name}</h5>
        </div>
      </div>
      {!isMobile && (
        <h5 className="summoner-match-row-eliminated">{roundEliminated}</h5>
      )}
      <div className="summoner-match-row-augments">
        {augments.map((element) => {
          return <img src={element} alt={name} loading="lazy" title="Augment"/>;
        })}
      </div>
      <div className="summoner-match-row-board">
        <div className="summoner-match-row-traits">
          {traits.map((element) => {
            return (
              <Trait
                size="small"
                hasLabel={false}
                hasValue={true}
                url={element.url}
                name={element.name}
                currentTrait={element.currentTrait}
                traitStyle={element.traitStyle}
              />
            );
          })}
        </div>
        <div className="summoner-match-row-units">
          {units.map((element) => {
            return (
              <Unit
                size="small"
                id={element.id}
                cost={element.cost}
                name={element.name}
                url={element.url}
                items={element.items}
                level={element.level}
              />
            );
          })}
        </div>
      </div>
      {!isMobile && (
        <div className="summoner-match-row-gold">
          <h5>{goldLeft}</h5>
          <img src={goldIcon} alt="gold" />
        </div>
      )}
    </div>
  );
};
