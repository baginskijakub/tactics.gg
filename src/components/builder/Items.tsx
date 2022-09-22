import React, {useState, useEffect} from "react";
import "./builder.css";
import Dropdown from "../buttons/Dropdown";
import Item from "./Item";
import itemsData from "./Items.json"

export const Items: React.FC = () => {
  let radiantItems:any[] = []
  let normalItems: any[] = []
  let shimmerscaleItems:any[] = []
  let emblemItems:any[] = []

    itemsData.items.forEach(item => {
      switch(item.type){
        case "normal":
          normalItems.push(item)
          break
        case "radiant":
          radiantItems.push(item)
          break
        case "shimmerscale":
          shimmerscaleItems.push(item)
          break
        case "emblem":
          emblemItems.push(item)
          break
      }
    })


  const [dropdown, setDropdown] = useState("Normal");
  const [items, setItems] = useState<any[]>(normalItems)

  function changeState(value: string){
    switch(value){
      case "Regular":
        setItems(normalItems)
        break
      case "Emblems":
        setItems(emblemItems)
        break
      case "Shimmerscale":
        setItems(shimmerscaleItems)
        break
      case "Radiant":
        setItems(radiantItems)
      
    }
  }

  return (
    <div className="builder-items-wrapper">
      <Dropdown
        name="Type"
        values={["Regular", "Emblems", "Shimmerscale", "Radiant"]}
        defaultValue="Regular"
        size="small"
        onChange={changeState}
      />
      <div className="buiilder-items-container">
        {items.map((item) => {
          return <Item id={item.id} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default Items;
