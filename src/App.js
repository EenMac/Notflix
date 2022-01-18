import React from 'react';
import {BrowserRouter as Router, Routes, Link, Route,  Redirect} from "react-router-dom"
import Login from './login/login';
import Rows from './Rows'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
        </div>
          <Routes>
            <Route exact path="/" component={Rows}/>
            <Route exact path="/browse" component={Login}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
