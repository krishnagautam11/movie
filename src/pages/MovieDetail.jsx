import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdb } from "../api/tmdb";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favorites/favoritesSlice";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((fav) => fav.id === Number(id));

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const res = await tmdb.get(`/movie/${id}`);
        setMovie(res.data);
      } catch (err) {
        setError("Failed to load movie details.",err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const toggleFavorite = () => {
    if (isFavorite) dispatch(removeFavorite(movie.id));
    else dispatch(addFavorite(movie));
  };

  if (loading) return <p className="text-center mt-10 text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto mt-6 p-4 bg-gray-900 text-white rounded-lg shadow-lg movie-cards">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-400 mb-4">{movie.tagline}</p>
          <p className="mb-4">{movie.overview}</p>

          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average} / 10</p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {movie.genres?.map((g) => (
              <span
                key={g.id}
                className="bg-indigo-600 text-sm px-2 py-1 rounded-md"
              >
                {g.name}
              </span>
            ))}
          </div>

          <button
            onClick={toggleFavorite}
            className={`mt-6 px-4 py-2 rounded-md text-white ${
              isFavorite ? "bg-red-600" : "bg-green-600"
            }`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
