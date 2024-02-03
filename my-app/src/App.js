import React, { useState } from "react";
import "./App.css";
import Sidebar from './components/sidebar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Profile from './components/profile';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element = {<Dashboard/>}/>
          <Route path="/profile" element = {<Profile/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App;
