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

 const items = [{id: 3083,name: "Warmog", url: "https://raw.communitydragon.org/latest/game/assets/items/icons2d/3083_tank_t3_warmogs.png"},{id: 3083,name: "Warmog", url: "https://raw.communitydragon.org/latest/game/assets/items/icons2d/3083_tank_t3_warmogs.png"}, {id: 3193,name: "Warmog", url: "https://raw.communitydragon.org/latest/game/assets/items/icons2d/3193_gargoyle_stoneplate.png"}]


function App() {
  return (
    <div className="nav-button">
      <Navbar />
        <Unit 
          name="Sylas"
          id={12}
          url="https://raw.communitydragon.org/latest/game/assets/characters/sylas/hud/sylas_circle_1.png"
          cost={3}
          size="big"
          isLevel3={true}
          items={items}
          />
        <Unit 
          name="Sylas"
          id={12}
          url="https://raw.communitydragon.org/latest/game/assets/characters/sylas/hud/sylas_circle_1.png"
          cost={3}
          size="medium"
          isLevel3={true}
          items={items}
          />
        <Unit 
          name="Sylas"
          id={12}
          url="https://raw.communitydragon.org/latest/game/assets/characters/sylas/hud/sylas_circle_1.png"
          cost={3}
          size="small"
          isLevel3={true}
          items={items}
          />
    </div>
  );
}

export default App;
