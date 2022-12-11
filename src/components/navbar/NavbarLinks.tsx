import React, {useState, useEffect} from "react";
import { NavButton } from "../buttons/NavButton";
import { useLocation } from "react-router";
import "./navbar.css";

export const NavbarLinks: React.FC = () => {
  const[selected, setSelected] = useState([true, false, false, false, false, false, false]);
  let location = useLocation();

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

  //handling ui to correctly mark selected page on load 

  useEffect(()=> {
    switch(location.pathname){
      case "/teambuilder":
        setSelected([false, true, false, false, false, false, false])
        break;
      case "/summoner":
        setSelected([false, false, true, false, false, false, false])
        break;
      case "/augments":
        setSelected([false, false, false, true, false, false, false])
        break;
      case "/units":
        setSelected([false, false, false, false, true, false, false])
        break;
      case "/items":
        setSelected([false, false, false, false, false, true, false])
        break;
      case "/leaderboard":
        setSelected([false, false, false, false, false, false, true])
        break;

    }
  }, [])




  return (
    <div className="navbar-links-wrapper">
      <div className="navbar-links-container">
        <NavButton index={0} text="Comps" isSelected={selected[0]} link="" path="/" handleSelection={handleSelected}/>
        <NavButton index={1} text="Team Builder" isSelected={selected[1]} link="" path="/teambuilder" handleSelection={handleSelected}/>
        <NavButton index={2} text="Summoner Search " isSelected={selected[2]} link="" path="/summoner" handleSelection={handleSelected}/>
        <NavButton index={3} text="Augments" isSelected={selected[3]} link="" path="/augments" handleSelection={handleSelected}/>
        <NavButton index={4} text="Units" isSelected={selected[4]} link="" path="/units" handleSelection={handleSelected}/>
        <NavButton index={5} text="Items" isSelected={selected[5]} link="" path="/items" handleSelection={handleSelected}/>
        <NavButton index={6} text="Leaderboards" isSelected={selected[6]} link="" path="/leaderboard" handleSelection={handleSelected}/>
        {/* <NavButton index={7} text="Guides" isSelected={selected[7]} link="" path="/guides" handleSelection={handleSelected}/> */}
      </div>
    </div>
  );
};
