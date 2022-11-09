import './Sidebar.css';
import React from 'react';
import { Link } from "react-router-dom";

export function Sidebar() {

    function navHome() {
        window.location.href = '/';
    }
    function navMakingOfThisWebsite() {
        window.location.href = '/makingOfThisWebsite';
    }

    function navFoundational() {
        window.location.href = '/foundational';
    }

    function navRecipeCards() {
        window.location.href = '/recipeCards';
    }

    function navWebserver() {
        window.location.href = '/webserver';
    }

    function navDatabase() {
        window.location.href = '/database';
    }

    function navLeaflet() {
        window.location.href = '/leaflet';
    }

    return (
        <div className='sidebar'>
            <div className='sidebarItem' onClick={()=> navHome()}>Home</div>
            <div className='sidebarItem' onClick={()=> navMakingOfThisWebsite()}>Making of this website</div>
            <div className='sidebarItem' onClick={()=> navFoundational()}>Foundational Projects</div>
            <div className='sidebarItem' onClick={()=> navRecipeCards()}>Recipe Cards</div>
            <div className='sidebarItem' onClick={()=> navWebserver()}>Webserver</div>
            <div className='sidebarItem' onClick={()=> navDatabase()}>Database</div>
            <div className='sidebarItem' onClick={()=> navLeaflet()}>Leaflet</div>
            {/* <div className='sidebarItem'>Battleship??</div> */}
        </div>
    );
};