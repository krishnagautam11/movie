import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favorites/favoritesSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) dispatch(removeFavorite(movie.id));
    else dispatch(addFavorite(movie));
  };

  return (
    <div className="bg-red-900 text-white rounded-lg shadow-lg/15 transition-all delay-70 duration-450 hover:scale-[1.02] hover:shadow-red-200 movie-card ">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-t-lg"
        />
        <div className="p-2 flex-col gap-2 text-center flex justify-between items-center movie-details">
        <h4 className="text-sm">{movie.title}</h4>
        <p>language: {movie.original_language}</p>
        <button
          onClick={toggleFavorite}
          className={`text-xl ${isFavorite ? "text-red-500" : "text-gray-400"}`}
        >
          ♥
        </button>
      </div>
      </Link>
      
    </div>
  );
};

export default MovieCard;
