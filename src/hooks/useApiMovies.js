import { useEffect, useRef, useState } from "react";
import { fetchMovies } from "../helper/fetchMovies";

export const useApiMovies = ({search}) => {
  // console.log('useApiMovies()')
  const previousSearch = useRef(search);
  const [responseMovies, setResponseMovies] = useState([]);
  const [loading, setLoading] = useState();
  const movies = responseMovies.Search;
  //Con esto centralizamos la API y no dependemos de su contrato
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    year: movie.Year,
    title: movie.Title,
    type: movie.Type,
    poster: movie.Poster,
  }));
  const getMovies = async ({search}) => {
    // console.log('getMovies()')
    if (previousSearch.current === search) return;
    if (search === " ") return;
    try {
      setLoading(true);
      if (search) {
        const movies = await fetchMovies(search);
        setResponseMovies(movies);
      }
      setLoading(false);
    } catch (error) {
      throw "getMovies error";
    } finally {
      previousSearch.current = search;
    }
  };

  return { mappedMovies, getMovies, loading };
};
