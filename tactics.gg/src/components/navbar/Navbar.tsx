import React from 'react';
import './navbar.css';
import NavbarLinks from './NavbarLinks';
import logo from '../../images/logo.svg';
import {DefaultSearch} from '../search/DefaultSearch'

export const Navbar: React.FC = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-inner-container">
                <img src={logo} alt="Tactics.gg"></img>
                <DefaultSearch 
                    initialValue = "Search summoner"
                    />
            </div>
            <NavbarLinks />
        </div>
    )
}
