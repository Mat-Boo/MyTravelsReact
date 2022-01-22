import React from 'react';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
    return (
        <div className='MainMenu'>
            <div className='LogoTitleBox'>
                <img src="./ressources/svg/compass.svg" className="NavLogo" alt="logo"/>
                <span className='LogoTitle'>My Travels</span>
            </div>
            <ul className='NavList'>
                <li>
                    <NavLink exact to="/" activeclassname="nav-active" className='NavItem'>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/destinations" activeclassname="nav-active" className='NavItem'>
                        Destinations
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/worldtour" activeclassname="nav-active" className='NavItem'>
                        World Tour
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/ressources" activeclassname="nav-active" className='NavItem'>
                        Ressources
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/apropos" activeclassname="nav-active" className='NavItem'>
                        A propos
                    </NavLink>
                </li>
            </ul>
            <svg width="32" height="32" fill="currentColor" 
            className="Search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 
            3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 
            1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
    );
};

export default MainMenu;
