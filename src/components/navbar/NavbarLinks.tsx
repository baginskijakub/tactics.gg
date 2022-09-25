import React, {useState, useEffect} from "react";
import { NavButton } from "../buttons/NavButton";
import "./navbar.css";

export const NavbarLinks: React.FC = () => {
  const[selected, setSelected] = useState([true, false, false, false, false, false, false]);

  function handleSelected(index: number){
    let arr: boolean[] = []
    selected.forEach((value, i) => {
      if(index === i){
        arr.push(true)
      }
      else{
        arr.push(false)
      }
    })
    setSelected(arr)
  }

  useEffect(() => {
    console.log(selected)
  },[selected])



  return (
    <div className="navbar-links-wrapper">
      <div className="navbar-links-container">
        <NavButton index={0} text="Comps" isSelected={selected[0]} link="" path="" handleSelection={handleSelected}/>
        <NavButton index={1} text="Team Builder" isSelected={selected[1]} link="" path="/" handleSelection={handleSelected}/>
        <NavButton index={2} text="Summoner Search " isSelected={selected[2]} link="" path="/summoner" handleSelection={handleSelected}/>
        <NavButton index={3} text="Augments" isSelected={selected[3]} link="" path="/augments" handleSelection={handleSelected}/>
        <NavButton index={4} text="Units" isSelected={selected[4]} link="" path="/units" handleSelection={handleSelected}/>
        <NavButton index={5} text="Items" isSelected={selected[5]} link="" path="" handleSelection={handleSelected}/>
        <NavButton index={6} text="Leaderboards" isSelected={selected[6]} link="" path="" handleSelection={handleSelected}/>
      </div>
    </div>
  );
};

export default NavbarLinks;
