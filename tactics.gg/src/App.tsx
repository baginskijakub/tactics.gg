import React from 'react';
import './App.css';
//import {PrimaryButton} from './components/buttons/PrimaryButton'
// import {DropdownButton} from './components/buttons/DropdownButton'
// import aatrox from './images/champions/Aatrox_1653029579.jpg'
//import {NavButton} from './components/buttons/NavButton'
//import {NavbarLinks} from './components/navbar/NavbarLinks'
import {Navbar} from './components/navbar/Navbar';
//import SummonerSearch from './components/search/SummonerSearch'
import Unit from './components/unit/Unit';
import Trait from './components/trait/Trait';
import Comp from './components/comp/Comp';
import {units, traits} from './sample-comp-data';

 const items = [{id: 3083,name: "Warmog", url: "https://raw.communitydragon.org/latest/game/assets/items/icons2d/3083_tank_t3_warmogs.png"},{id: 3083,name: "Warmog", url: "https://raw.communitydragon.org/latest/game/assets/items/icons2d/3083_tank_t3_warmogs.png"}, {id: 3193,name: "Warmog", url: "https://raw.communitydragon.org/latest/game/assets/items/icons2d/3193_gargoyle_stoneplate.png"}]


function App() {

  return (
    <div className="nav-button">
      <Navbar />
        <Comp 
          units={units}
          traits={traits}
          avgPlacement={3.72}
          winrate={18.1}
          playrate={1.12}
          top4Ratio={57.1}
          />
    </div>
  );
}

export default App;
