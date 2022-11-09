import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import { Home } from './components/home/Home.js';
import { Sidebar } from './components/sidebar/Sidebar.js';
import { MakingOfThisWebsite } from './components/makingOfThisWebsite/MakingOfThisWebsite';
import { Foundational } from './components/foundational/Foundational';
import { RecipeCards } from './components/recipeCards/RecipeCards';
import { Webserver } from './components/webserver/Webserver';
import { Database } from './components/database/Database';
import { Leaflet } from './components/leaflet/Leaflet';
import { NoPage } from './components/noPage/NoPage';

export default function App() {
  
  return (
    <div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="makingOfThisWebsite" element={<MakingOfThisWebsite />} />
            <Route path="foundational" element={<Foundational />} />
            <Route path="recipeCards" element={<RecipeCards />} />
            <Route path="webserver" element={<Webserver />} />
            <Route path="database" element={<Database />} />
            <Route path="leaflet" element={<Leaflet />} />
            <Route path="*" element={<NoPage />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}