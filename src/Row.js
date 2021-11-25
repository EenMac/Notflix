import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./Css/Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    // const [trailerUrl, setTrailerUrl] = ("");
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    const opts = {
        heights: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    };

    // const handleClick = (movie) => {
    //     if (trailerUrl){
    //         setTrailerUrl("");
    //     } else {
    //         movieTrailer(movie?.name || "")
    //             .then((url) => {
    //             const urlParams = new URLSearchParams(new URL(url).search);
    //             setTrailerUrl(urlParams.get("v"));
    //         })
    //         .catch((error) => console.log(error));
    //     }
    // };

    // console.table(movies);

    return (
        <div className = "row">
            <h2 className="title">{title}</h2>
            
            <div className = "row-posters">
                {movies.map(movie =>  (
                  <img 
                    className ={`row-poster ${isLargeRow && "row_poster"}`} 
                    key={movie.id}
                    // onClick = {() => handleClick(movie)}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}/>
                ))}
            </div>
            <YouTube videoId="RzyCtVI863w&ab_channel=RugbyPass" opts={opts}/>
        </div>
    )
}

export default Row;
