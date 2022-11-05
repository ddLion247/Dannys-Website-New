import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import { Home } from './components/home/Home.js'
import { Sidebar } from './components/sidebar/Sidebar.js'

function App() {
  
  return (
    <div>
      <Sidebar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              {/* <Route path="blogs" element={<Blogs />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}
export default App;