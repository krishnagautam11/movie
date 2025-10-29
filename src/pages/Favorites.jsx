import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../features/favorites/favoritesSlice";

const Favorites = () => {
  const { items } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-10 movie-cards">
        <h2 className="text-xl mb-2">No favorite movies yet 💔</h2>
        <p>
          Go back to the <Link to="/" className="text-blue-400 underline">home page</Link> and add some!
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 ">
      <h1 className="text-2xl text-white font-bold mb-4">Your Favorites ❤️</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 ">
        {items.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 text-white rounded-lg shadow-md"
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-t-lg"
              />
            </Link>
            <div className="p-2 flex justify-between items-center">
              <h3 className="text-sm truncate">{movie.title}</h3>
              <button
                onClick={() => dispatch(removeFavorite(movie.id))}
                className="text-red-500 text-lg"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
