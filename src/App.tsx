import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import {NavbarMobile} from './components/navbar/NavbarMobile'
import { Route, Routes, BrowserRouter} from 'react-router-dom'

//pages
import {Summoner} from "./pages/Summoner";
import {TeamBuilder} from "./pages/TeamBuilder";
import  {Augments}  from "./pages/Augments";
import {Units} from "./pages/Units";
import {Items} from "./pages/Items"
import {Comps} from "./pages/Comps"
import {Leaderboard} from './pages/Leaderboard'
import {PrivacyPolicy} from './pages/PrivacyPolicy'
import {Guides} from './pages/Guides'
import {Contact} from './pages/Contact'
import { CompareAugments } from "./pages/CompareAugments";
import {Set8} from './pages/Set8'
import {Profile} from './pages/Profile'

//util
import {Footer} from './components/footer/Footer'
import { ModalContainer } from './modal/ModalContainer';
import { ModalContextProvider} from "./modal/ModalContext";
import { LoginContextProvider } from "./login/LoginContext";

const App:React.FC = () => {
  const window = require('global')
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
  
  return(
    <ModalContextProvider>
      <LoginContextProvider>
      <div className="app-container">
          { width < 850 ? <NavbarMobile/> : <Navbar handleSummonerSearch={handleSummonerSearch}/>}
          <Routes >
            <Route path='/units' element={<Units/>}/>
            <Route path='/items' element={<Items/>}/>
            <Route index element={<Comps/>}/>
            <Route path='/comps' element={<Comps/>}/>
            <Route path='/augments' element={<Augments/>}/>
            <Route path='/summoner' element={<Summoner name={summonerName} region={region}/>}/>
            <Route path='/teambuilder/:id' element={<TeamBuilder />}/>
            <Route path='/teambuilder' element={<TeamBuilder />}/>
            <Route path='/leaderboard' element={<Leaderboard />}/>
            <Route path='/guides' element={<Guides />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/privacy' element={<PrivacyPolicy />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/set8' element={<Set8 />}/>
            <Route path='/compareAugments' element={<CompareAugments />}/>
          </Routes>
           <ModalContainer />
          <Footer />
      </div>
      </LoginContextProvider>
    </ModalContextProvider>
  )
}

export default App;
