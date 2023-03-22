import { useState } from "react";

export const SearchForm = ({getMovies, handleSearch}) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      Swal.fire('no se puede ingresar un valor vacio')
      return;
    }
    if (search.length <= 3) {
      Swal.fire('Debes ingresar más de 3 carácteres')
      return;
    }
    getMovies()
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);

  };

  return (
    <>
      <h1> Buscador de peliculas </h1>
      <form
        className="form"
        onSubmit={handleSubmit}>
        <input
          placeholder="Avatar, Batman..."
          onChange={handleChange}
          name="search"
          value={search}
        />
        <button type="submit"> Buscar </button>
      </form>
    </>
  );
};
