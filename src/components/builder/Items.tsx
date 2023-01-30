import React, {useState, useEffect} from "react";
import "./builder.css";
import {Dropdown} from "../buttons/Dropdown";
import {Item} from "./Item";
import { getAllItems } from "../../model/DataModel";

export const Items: React.FC = () => {
  const [items, setItems] = useState<any[]>([])
  const[normalItems, setNormalItems] = useState<any[]>([])
  const[emblemItems, setEmblemItems] = useState<any[]>([])
  const[radiantItems, setRadiantItems] = useState<any[]>([])

  useEffect(()=> {

    const fetchAllItems = async () => {
      let allItems = await getAllItems();
      setRadiantItems(allItems.radiantItems);
      setNormalItems(allItems.normalItems);
      setEmblemItems(allItems.emblemItems);
      setItems(allItems.normalItems)
    }

    fetchAllItems();
  }, [])



  function changeState(value: string){
    switch(value){
      case "Regular":
        setItems(normalItems)
        break
      case "Emblems":
        setItems(emblemItems)
        break
      case "Radiant":
        setItems(radiantItems)
      
    }
  }

  useEffect(()=> {
  }, [items])

  return (
    <div className="builder-items-wrapper">
      <Dropdown
        name="Type"
        values={["Regular", "Emblems", "Radiant"]}
        defaultValue="Regular"
        size="small"
        onChange={changeState}
      />
      <div className="buiilder-items-container">
        {items.map((item) => {
          return <Item id={item.id} name={item.name} src={item.src}/>;
        })}
      </div>
    </div>
  );
};
