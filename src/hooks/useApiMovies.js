import { useState } from "react";
import { fetchMovies } from "../helper/fetchMovies";


export const useApiMovies = () => {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search;

  //Con esto centralizamos la API y no dependemos de su contrato
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    year: movie.Year,
    title: movie.Title,
    type: movie.Type,
    poster: movie.Poster,
  }));

  const getMovies = async (search) => {
    if (search === ' ') return
    if(search){
      const movies =  await fetchMovies(search);
      setResponseMovies(movies)
    }
  }



  return {mappedMovies, getMovies}
};
