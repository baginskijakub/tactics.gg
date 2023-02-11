import React, { useEffect, useState } from "react";

import "./navbar.css";
import {NavbarLinks} from "./NavbarLinks";
import logo from "../../images/logo.svg";
import { DefaultSearch } from "../search/DefaultSearch";
import {SummonerSearch} from "../search/SummonerSearch";
import {PrimaryButton} from '../buttons/PrimaryButton'
import { useModalChange } from "../../modal/ModalContext";
// import {NavbarLogin} from "../../login/NavbarLogin"
import {useUser, useUserChange} from '../../login/LoginContext'

import {getRiotAccount} from '../../modal/LoginModel'

interface Props{
  handleSummonerSearch: (name: string, region:string) => void
}
export const Navbar: React.FC<Props> = ({handleSummonerSearch}) => {
  const [search, setSearch] = useState("open");
  const openModal = useModalChange()

  const user = useUser()
  const userChange = useUserChange()

  function handleSearch() {
    if (search === "open") {
      setSearch("closed");
    } else {
      // setSearch('open')
    }
  }

  function handleSummoner(name: string, region: string) {
    handleSummonerSearch(name, region)
  }

  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <img src={logo} alt="Tactics.gg"></img>
        <div className="navbar-inner-in">
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
          {/* {(user === null || user.summonerName === undefined || user.icon === undefined) ? <PrimaryButton text="Login" fn={openModal}/> : <></>} */}
        </div>
      </div>
      <NavbarLinks />
    </div>
  );
};
