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
  const [search, setSearch] = useState('')
  const { mappedMovies, getMovies, loading } = useApiMovies({search});
  const hasMovies = mappedMovies?.length > 0;

  const handleSearch = (searchSubmited) => {
    setSearch(searchSubmited)
  }

  return (
    <>
      <div className="page">
        <header>
          <SearchForm getMovies={getMovies} handleSearch={handleSearch}/>
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
