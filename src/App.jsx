import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { NoResults } from "./components/NoResults";
import { SearchForm } from "./components/SearchForm";
import { useApiMovies } from "./hooks/useApiMovies";

// http://www.omdbapi.com/?apikey=[yourkey]&
//Api_key = e250385c
//http://www.omdbapi.com/?i=tt3896198&apikey=e250385c

function App() {
  const [asd, setASD] = useState('')
  const { mappedMovies, getMovies, loading } = useApiMovies(asd);
  const hasMovies = mappedMovies?.length > 0;

  const handleSearchSubmit = (searchSubmited) => {
    setASD(searchSubmited)
  }

  return (
    <>
      <div className="page">
        <header>
          <SearchForm getMovies={getMovies} handleSearchSubmit={handleSearchSubmit}/>
        </header>
        <main>
          {loading ? (
            <p> Cargando... </p>
          ) : hasMovies ? (
            <Movies movies={mappedMovies}/>
          ) : (
            <NoResults />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
