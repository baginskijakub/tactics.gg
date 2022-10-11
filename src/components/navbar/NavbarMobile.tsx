import React, {useState} from 'react'
import './navbar.css'
import logo from "../../images/logo.svg";
import hamburger from "../../images/icons/menu.svg"
import {NavButtonMobile} from "../buttons/NavButtonMobile"
// import styled from "styled-components";

export const NavbarMobile:React.FC = () => {

    const[state, setState] = useState("closed")

    function handleOpen(){
        if(state === "closed"){
            setState("open")
        }
        else{
            setState("closed")
        }
    }
    const[selected, setSelected] = useState([true, false, false, false, false]);

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
        setState("closed")
    }

    return (
        <div className="nav-mobile-wrapper">
            <div className="nav-mobile-inner">
                <img className="nav-mobile-logo" src={logo} alt="Tactics.gg"></img>
                <img className="nav-mobile-hamburger" src={hamburger} alt="Menu" onClick={() => handleOpen()}></img>
            </div>
            <div className={`nav-mobile-links ${state}`}>
                        <NavButtonMobile text="Comps" isSelected={selected[0]} link="" path="/" index={0} handleSelection={handleSelected}/>
                        <NavButtonMobile text="Summoner Search " isSelected={selected[1]} link="" path="/summoner" index={1} handleSelection={handleSelected}/>
                        <NavButtonMobile text="Augments" isSelected={selected[2]} link="" path="/augments" index={2} handleSelection={handleSelected}/>
                        <NavButtonMobile text="Units" isSelected={selected[3]} link="" path="/units" index={3} handleSelection={handleSelected}/>
                        <NavButtonMobile text="Items" isSelected={selected[4]} link="" path="/items" index={4} handleSelection={handleSelected}/>
                        {/* <NavButtonMobile text="Leaderboards" isSelected={false} link="" path="" /> */}
            </div>

        </div>
    )
}
