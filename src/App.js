import React from 'react';
import {BrowserRouter as Router, Routes, Link, Route,  Redirect} from "react-router-dom"
import Login from './login/login';
import Rows from './Rows'


function App() {
  return (
    <div className="App">
      <Router>
        <Rows/>
      </Router>
    </div>
  );
}

export default App;
