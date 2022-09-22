import React from "react";
import "./search.css";
import { DropdownButton } from "../buttons/DropdownButton";

interface Region {
  text: string;
  isSelected: boolean;
  size: string;
}

interface Props {
  region: string;
  regions: Region[];
  handleOpen: () => void;
  handleClick: (text: string) => void;
}

export const RegionDropdown: React.FC<Props> = ({
  region,
  handleClick,
  handleOpen,
  regions,
}) => {
  return (
    <div className="region-wrapper">
      <div className="region-container" onClick={handleOpen}>
        <h5>Region</h5>
        <p className="body" style={{ color: "#B8B8B8" }}>
          {region}
        </p>
      </div>
      <div className="region-dropdown-container">
        {regions.map((element) => (
          <DropdownButton
            text={element.text}
            isSelected={element.isSelected}
            size={element.size}
            fn={handleClick}
          />
        ))}
      </div>
    </div>
  );
};
