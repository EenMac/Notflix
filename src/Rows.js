import React from 'react'
import logo from './logo.svg';
import './Css/App.css';
import Row from './Row';
import Requests from './Requests';
import Banner from './Banner';
import Navbar from './Navbar';

function Rows() {
    return (
        <div>
            <Navbar/>
            <Banner/>  
            <h1 className="heading">Netflix App recreation</h1>
            <Row title= "Trending now" 
            fetchURL={Requests.fetchTrending} 
            isLargeRow={true}/>
            <Row title="Netflix Originals" fetchURL={Requests.fetchNetflixOriginals}/>
            <Row title="Top Rated" fetchURL={Requests.fetchTopRated}/>
            <Row title="Action Movies" fetchURL={Requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchURL={Requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchURL={Requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchURL={Requests.fetchRomanceMovies}/>
            <Row title="Romance Movies" fetchURL={Requests.fetchDocumentaries}/>
        </div>
    )
}

export default Rows
