import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/w500/";
  const [trailerUrl, setTrailerUrl] = useState("")
  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    }
  }

  const handleClick = (movie) => {
   if (trailerUrl) {
     setTrailerUrl("")
   } else { 
     movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
       .then(url => {
         const urlParams = new URLSearchParams(new URL(url).search);
         // https://www.youtube.com/watch?v=PL-AwboyxRk
         setTrailerUrl(urlParams.get("v")); // v=PL-AwboyxRk
       }).catch((error) => setTrailerUrl(movieTrailer(movie?.name || movie?.title || movie?.original_name || '')));
   }
 }

  useEffect(() => {
    async function fetchData() {
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
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                onClick={() => handleClick(movie)}
                alt={movie.name}
              />
            ))
        }
      </div>
      <div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
