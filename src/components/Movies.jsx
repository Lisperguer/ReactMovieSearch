export const Movies = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <ol
          className="movie"
          key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img
            src={movie.poster}
            alt="Movie Image"
          />
        </ol>
      ))}
    </ul>
  );

};
