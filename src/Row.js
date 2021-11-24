import React, {useState, useEffect} from 'react';
import axios from "./axios";
import requests from './Requests';
import "./Css/Row.css"


const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL, isLargeRow }) {
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
            <h2 className="title">{title}</h2>
            
            <div className = "row-posters">
                {movies.map(movie => (
                  <img 
                    className ={`row-poster ${isLargeRow && "row_poster"}`} 
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row;
