import React, {useState} from "react";
import { useNavigate } from "react-router";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Summoner from "./pages/Summoner";
import TeamBuilder from "./pages/TeamBuilder";
import { Route, Routes} from 'react-router-dom'
import  Augments  from "./pages/Augments";
import Units from "./pages/Units";
import Items from "./pages/Items"

function App() {
  const[summonerName, setSummonerName] = useState<any>(undefined)
  const[region, setRegion] = useState<any>(undefined)
  let navigate = useNavigate();

  function handleSummonerSearch(name: string, region: string){

    setRegion(region);
    setSummonerName(name)
    console.log("app")
    navigate("/summoner")
  }
  
  return (
    <div className="app-container">
        <Navbar handleSummonerSearch={handleSummonerSearch}/>
        <Routes >
          <Route path='/units' element={<Units/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/augments' element={<Augments/>}/>
          <Route path='/summoner' element={<Summoner name={summonerName} region={region}/>}/>
          <Route path='/' element={<TeamBuilder />}/>
        </Routes>
    </div>
  );
}

export default App;
