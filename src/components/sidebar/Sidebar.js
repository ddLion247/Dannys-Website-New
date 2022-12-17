import './Sidebar.css';
import React from 'react';

export function Sidebar() {

    return (
        <div className='sidebar'>
            <a className='sidebarItem' href = '/'>Home</a>
            <a className='sidebarItem' href = '/makingOfThisWebsite'>Making of this website</a>
            <a className='sidebarItem' href = '/foundational'>Foundational Projects</a>
            <a className='sidebarItem' href = '/recipeCards'>Recipe Cards</a>
            <a className='sidebarItem' href = '/webserver'>Webserver</a>
            <a className='sidebarItem' href = '/database'>Database</a>
            <a className='sidebarItem' href = '/leaflet'>Leaflet</a>
        </div>
    ); 
};