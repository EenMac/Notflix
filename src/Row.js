import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./Css/Row.css";


const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [image, setImage] = useState(undefined);
    

    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

     

    console.log(1 === "1");



    return (
        <div className = "row">
            <h2 className="title">{title}</h2>
            <div className = "row-posters">
                {movies.map((movie) =>  (
                    <img 
                    className={`row-poster ${isLargeRow && "row-posterLarge"}`} 
                    key={movie.id}
                    onClick = {()=> handleClick(movie)}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}/>
                ))};
            </div>
           {image && <img src={image} className="rendered-image" />}
        </div>
    )
}

export default Row;
