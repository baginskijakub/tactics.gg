import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Summoner from "./pages/Summoner";
import TeamBuilder from "./pages/TeamBuilder";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
        <Navbar />
        <Routes >
          <Route path='/summoner' element={<Summoner />}/>
          <Route path='/' element={<TeamBuilder />}/>
        </Routes>
    </div>
  );
}

export default App;
