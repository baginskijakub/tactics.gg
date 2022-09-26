import React, { useState, useEffect } from "react";
import "./builder.css";
import { DefaultSearch } from "../search/DefaultSearch";
import Dropdown from "../buttons/Dropdown";
import Unit from "./Unit";
import data from './units-data.json'

export const Units: React.FC = () => {
  let arr: any = [];
      data.forEach((unit: any) => {
        arr.push(
          <Unit
            id={unit.id}
            name={unit.name}
            cost={unit.cost}
            size="small"
            url={`https://ittledul.sirv.com/Images/units/${unit.id}.png`}
            level={0}
            items={[]}
          />
        );
      });
  const [searched, setSearched] = useState("");
  const [allUnits, setAllUnits] = useState<any[]>(arr);
  const [units, setUnits] = useState<any[]>(arr);
  const [sort, setSort] = useState("Cost");

  function sortChange(value: string) {
    setSort(value);
    let tempArr = units;
    for (var i = 0; i < tempArr.length; i++) {
      for (var j = 0; j < tempArr.length - i - 1; j++) {
        if (tempArr[j].props.cost > tempArr[j + 1].props.cost) {
          var temp = tempArr[j];
          tempArr[j] = tempArr[j + 1];
          tempArr[j + 1] = temp;
        }
      }
    }
    setUnits(tempArr);
  }
  
  function handleSearch(value: string) {
    setSearched(value);
    let arr: any = [];
    allUnits.forEach((unit) => {
      if (unit.props.name.toLowerCase().includes(value.toLowerCase())) {
        arr.push(
          <Unit
            id={unit.props.id}
            name={unit.props.name}
            cost={unit.props.cost}
            size="small"
            url={`https://ittledul.sirv.com/Images/units/${unit.props.id}.png`}
            level={0}
            items={[]}
          />
        );
      }
    });
    setUnits(arr);
  }

  return (
    <div className="builder-units-wrapper">
      <div className="builder-units-navigation">
        <Dropdown
          name="Sort"
          values={["Cost", "A-Z"]}
          defaultValue="Cost"
          size="small"
          onChange={sortChange}
        />
        <DefaultSearch initialValue="Search unit" inputChange={handleSearch} />
      </div>
      <div className="builder-units-container">{units}</div>
    </div>
  );
};

export default Units;
