import React, { useState, useEffect } from "react";
import "./builder.css";
import { DefaultSearch } from "../search/DefaultSearch";
import Dropdown from "../buttons/Dropdown";
import Unit from "./Unit";
import { getUnitsData } from "../../model/Model";

export const Units: React.FC = () => {
  const [searched, setSearched] = useState("");
  const [allUnits, setAllUnits] = useState<any[]>([]);
  const [units, setUnits] = useState<any[]>([]);
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
    console.log();
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

  const fetchUnits = () => {
    getUnitsData().then((res: any) => {
      let arr: any = [];
      res.data.forEach((unit: any) => {
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
      setUnits(arr);
      setAllUnits(arr);
    });
  };

  React.useEffect(() => fetchUnits(), []);

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