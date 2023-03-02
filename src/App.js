import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Sidenav from "./components/Sidenav/Sidenav";
import Test from "./components/Test/Test";
import TopNavbar from "./components/TopNavbar/TopNavbar";

function App() {
  return (
    <Router>
      
        
        <Routes>
          <Route path="/dashboard" element={<><Dashboard /></>} />
          <Route path="/sidenav" element={<><Sidenav /></>} />
          <Route path="/test" element={<><Test /></>} />
          <Route path="/nav" element={<><TopNavbar /></>} />
          <Route exact path="/" element={<><Dashboard /></>} />
          
        </Routes>
      
    </Router>
  );
}

export default App;
