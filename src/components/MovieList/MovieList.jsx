import './MovieList.scss';

import { MovieCard } from '../MovieCard';

import moviesFromServer from '../../api/movies.json';

export const MovieList = ({ movies }) => {
  if (!movies.length) {
    return null;
  }

  return (
    <div className="movies">
      {moviesFromServer.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
