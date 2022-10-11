import React from "react";
import "./comp.css";
import {CompVariationRow} from "./CompVariationRow";

interface TraitInterface {
  name: string;
  currentTrait: number;
  traitStyle: number;
  url: string;
}

interface UnitInterface {
  id: number;
  name: string;
  cost: number;
  url: string;
  level: 0 | 1 | 2 | 3;
  items: Item[] | null;
}

interface Item {
  id: number;
  name: string;
  url: string;
}

interface Variation {
  avgPlacement: number;
  top4ratio: number;
  units: UnitInterface[];
  traits: TraitInterface[];
}

interface Props {
  variations: Variation[];
}

export const CompVariations: React.FC<Props> = ({ variations }) => {
  return (
    <div className="comp-variations-wrapper">
      <div className="comp-variations-container">
      {variations.map((element) => {
        return (
          <CompVariationRow
            avgPlacement={element.avgPlacement}
            top4ratio={element.top4ratio}
            traits={element.traits}
            units={element.units}
          />
        );
      })}
      </div>
    </div>
  );
};
