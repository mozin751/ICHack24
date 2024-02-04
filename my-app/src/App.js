import React from "react";
import "./App.css";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import LessonsDashboard from "./components/lessons_dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element = {<Dashboard/>}/>
          <Route path="/profile" element = {<Profile/>}/>
          <Route path="/lessondashboard" element = {<LessonsDashboard/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App;
