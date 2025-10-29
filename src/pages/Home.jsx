import { useState, useEffect } from "react";
import { tmdb } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    tmdb.get("/movie/popular").then(res => setMovies(res.data.results));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 movie-cards">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
