import React, {useState} from 'react';
import './navbar.css';
import NavbarLinks from './NavbarLinks';
import logo from '../../images/logo.svg';
import {DefaultSearch} from '../search/DefaultSearch'
import SummonerSearch from '../search/SummonerSearch';

export const Navbar: React.FC = () => {
    const [search, setSearch] = useState('open');
    function handleSearch(){
        if(search === 'open')
        {
            setSearch('closed')
        }
        else
        {
            // setSearch('open')
        }
    }

    return (
        <div className="navbar-container">
            <div className="navbar-inner-container">
                <img src={logo} alt="Tactics.gg"></img>
                <div onClick={handleSearch} style={{zIndex: "1"}}>
                {search === 'open' ? <DefaultSearch 
                    initialValue = "Search summoner"
                    /> : <SummonerSearch />}
                </div>
            </div>
            <NavbarLinks />
        </div>
    )
}
