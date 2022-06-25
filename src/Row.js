import axios from 'axios';
import React, {useState, useEffect} from 'react'
import './Row.css'

function Row({ title , fetchUrl,isLargeRows = false}) {
    const [movies, setMovies]= useState([]);

    
const base_url = "https://image.tmdb.org/t/p/original/";



    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    
    }, [fetchUrl]);

    console.log(movies);


    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
            {movies.map((movie) =>(
                (isLargeRows && movie.poster_path) ||
                (!isLargeRows && movie.backdrop_path))  &&(
                    <img 
                    className={`row_poster ${isLargeRows && "row_posterLarge" }`}
                    key={movie.id}
                    src={`${base_url}${
                        isLargeRows ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name}
                     />
                
                )   
            )}
            
            </div>
        </div>
    );
}

export default Row