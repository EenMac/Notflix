import React, {useState, useEffect} from 'react';
import axios from "./axios";
import requests from './Requests';
import "./Row.css"


const base_url = "https://image.tmdb.org/t/p/w500/";
function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    console.table(movies);

    return (
        <div className = "row">
            <h2>{title}</h2>
            
            <div className = "row-posters">
                {movies.map(movie => (
                  <img 
                    className = "row-poster"
                    key={movie.id}
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row;
