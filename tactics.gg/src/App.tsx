import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import Summoner from './pages/Summoner'
import TeamBuilder from './pages/TeamBuilder'


function App() {

  return (
    <div className="app-container">
      <Navbar />
        {/* { <Comp 
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
          /> } */}
        
        {/* {  <Summoner />  } */}
          <TeamBuilder />

    </div>
  );
}

export default App;
