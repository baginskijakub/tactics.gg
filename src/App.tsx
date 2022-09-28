import React, {useState} from "react";
import { useNavigate } from "react-router";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import NavbarMobile from './components/navbar/NavbarMobile'
import Summoner from "./pages/Summoner";
import TeamBuilder from "./pages/TeamBuilder";
import { Route, Routes} from 'react-router-dom'
import  Augments  from "./pages/Augments";
import Units from "./pages/Units";
import Items from "./pages/Items"
import Footer from './components/footer/Footer'

function App() {
  const[summonerName, setSummonerName] = useState<any>(undefined)
  const[region, setRegion] = useState<any>(undefined)
  let navigate = useNavigate();
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  function handleSummonerSearch(name: string, region: string){

    setRegion(region);
    setSummonerName(name)
    console.log("app")
    navigate("/summoner")
  }
  
  return (
    <div className="app-container">
        { width > 850 ? <Navbar handleSummonerSearch={handleSummonerSearch}/> : <NavbarMobile/>}
        <Routes >
          <Route path='/units' element={<Units/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/augments' element={<Augments/>}/>
          <Route path='/summoner' element={<Summoner name={summonerName} region={region}/>}/>
          <Route path='/' element={<TeamBuilder />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
