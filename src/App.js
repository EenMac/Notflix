import logo from './logo.svg';
import './App.css';
import React from 'react';
import Row from './Row';
import Requests from './Requests';


function App() {
  return (
    <div className="App">
      <h1> Lets get started</h1>
      <Row title= "Trending now" fetchURL={Requests.fetchTrending} />
    </div>
  );
}

export default App;
