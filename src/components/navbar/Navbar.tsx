import React, { useState } from "react";

import "./navbar.css";
import NavbarLinks from "./NavbarLinks";
import logo from "../../images/logo.svg";
import { DefaultSearch } from "../search/DefaultSearch";
import SummonerSearch from "../search/SummonerSearch";

interface Props{
  handleSummonerSearch: (name: string, region:string) => void
}
export const Navbar: React.FC<Props> = ({handleSummonerSearch}) => {
  const [search, setSearch] = useState("open");

  function handleSearch() {
    if (search === "open") {
      setSearch("closed");
    } else {
      // setSearch('open')
    }
  }

  function handleSummoner(name: string, region: string) {
    console.log("navbar")
    handleSummonerSearch(name, region)
  }

  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <img src={logo} alt="Tactics.gg"></img>
        <div onClick={handleSearch} style={{ zIndex: "1" }}>
          {search === "open" ? (
            <DefaultSearch
              initialValue="Search summoner"
              inputChange={() => {}}
            />
          ) : (
            <SummonerSearch handleInput={handleSummoner} />
          )}
        </div>
      </div>
      <NavbarLinks />
    </div>
  );
};
