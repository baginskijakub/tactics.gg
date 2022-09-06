import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import Comp from './components/comp/Comp';
import Summoner from './pages/Summoner'

import { profile, stats, placements, matches} from './sample-summoner-data' 
import {units, traits, positioning, items, augments, variations} from './sample-comp-data';


function App() {
  return (
    <div className="app-container">
      <Navbar />
        <Comp 
          units={units}
          traits={traits}
          avgPlacement={3.72}
          winrate={18.1}
          playrate={1.12}
          top4Ratio={57.1}
          positioning={positioning}
          items={items}
          augments={augments}
          variations={variations}
          />
        
        <Summoner 
          profile={profile}
          stats={stats}
          placements={placements}
          matches={matches}
          />
    </div>
  );
}

export default App;
