import React from 'react';
import './App.css';
//import {PrimaryButton} from './components/buttons/PrimaryButton'
// import {DropdownButton} from './components/buttons/DropdownButton'
// import aatrox from './images/champions/Aatrox_1653029579.jpg'
//import {NavButton} from './components/buttons/NavButton'
//import {NavbarLinks} from './components/navbar/NavbarLinks'
import {Navbar} from './components/navbar/Navbar';
import SummonerSearch from './components/search/SummonerSearch'


function App() {
  return (
    <div className="nav-button">
      <Navbar />
      <SummonerSearch />
    </div>
  );
}

export default App;
