import React, {useState} from "react";
import { useNavigate } from "react-router";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import NavbarMobile from './components/navbar/NavbarMobile'
import { Route, Routes} from 'react-router-dom'

//pages
import Summoner from "./pages/Summoner";
import TeamBuilder from "./pages/TeamBuilder";
import  Augments  from "./pages/Augments";
import Units from "./pages/Units";
import Items from "./pages/Items"
import Comps from "./pages/Comps"
import Leaderboard from './pages/Leaderboard'
import PrivacyPolicy from './pages/PrivacyPolicy'

import Footer from './components/footer/Footer'

function App() {
  const[summonerName, setSummonerName] = useState<any>(undefined)
  const[region, setRegion] = useState<any>(undefined)
  let navigate = useNavigate();
  const [width, setWidth] = React.useState(window.innerWidth);

  //change navbar on breakpoint
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  //handling searchbar in navbar so that when a summoner is searched the 'summoner' page opens with the result
  function handleSummonerSearch(name: string, region: string){
    setRegion(region);
    setSummonerName(name)
    navigate("/summoner")
  }
  
  return (
    <div className="app-container">
        { width > 850 ? <Navbar handleSummonerSearch={handleSummonerSearch}/> : <NavbarMobile/>}
        <Routes >
          <Route path='/units' element={<Units/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/' element={<Comps/>}/>
          <Route path='/comps' element={<Comps/>}/>
          <Route path='/augments' element={<Augments/>}/>
          <Route path='/summoner' element={<Summoner name={summonerName} region={region}/>}/>
          <Route path='/teambuilder' element={<TeamBuilder />}/>
          <Route path='/leaderboard' element={<Leaderboard />}/>
          <Route path='/privacy' element={<PrivacyPolicy />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
