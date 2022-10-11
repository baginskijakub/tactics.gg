import React, { useState } from "react";
import "./search.css";
import { RegionDropdown } from "./RegionDropdown";
import {SpecificSearch} from "./SpecificSearch";

interface Props {
  handleInput: (name: string, region: string) => void;
}

export const SummonerSearch: React.FC<Props> = ({ handleInput }) => {
  const [regions, setRegions] = useState([
    { text: "EUW", id: "euw1", size: "big", isSelected: true },
    { text: "EUNE", size: "big", id: "eun1", isSelected: false },
    { text: "NA", size: "big", id: "na1", isSelected: false },
  ]);
  const [region, setRegion] = useState("EUW");
  const [regionId, setRegionId] = useState("euw1");
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(text: string) {
    const temp = regions;
    temp.forEach(function (element) {
      if (element.text === text) {
        element.isSelected = true;
        setRegionId(element.id);
      } else {
        element.isSelected = false;
      }
    });
    setRegions(temp);
    setRegion(text);
    handleOpen();
  }

  function handleOpen() {
    if (isOpen === false) {
      setIsOpen(true);
      const elements = document.getElementsByClassName(
        "region-dropdown-container"
      ) as HTMLCollectionOf<HTMLElement>;
      if (elements.length > 0) {
        elements[0].style.display = "flex";
      }
    } else {
      setIsOpen(false);
      const elements = document.getElementsByClassName(
        "region-dropdown-container"
      ) as HTMLCollectionOf<HTMLElement>;
      if (elements.length > 0) {
        elements[0].style.display = "none";
      }
    }
  }

  function handleSearch(name: string) {
    handleInput(name, regionId);
  }

  return (
    <div className="summoner-search-container">
      <RegionDropdown
        region={region}
        regions={regions}
        handleClick={handleClick}
        handleOpen={handleOpen}
      />
      <span className="summoner-search-divider"></span>
      <SpecificSearch
        head="Summoner name"
        initialValue="Search summoner"
        handleInput={handleSearch}
      />
    </div>
  );
};
