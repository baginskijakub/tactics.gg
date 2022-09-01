import React from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import Comp from './components/comp/Comp';
import {units, traits, positioning, items, augments} from './sample-comp-data';


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
          positioning={positioning}
          items={items}
          augments={augments}
          />
    </div>
  );
}

export default App;
