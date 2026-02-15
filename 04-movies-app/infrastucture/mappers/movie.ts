import { CompleteMovie, Movie } from "../interfaces/movie";
import { Result } from "../interfaces/movie-db-response";
import { MovieDBMovieResponse } from "../interfaces/moviedb-movie-response";

export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      posterUrl: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "",
      backdropUrl: movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        : "",
    };
  };

  static fromTheMovieDBToCompleteMovie = (movie: MovieDBMovieResponse): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      posterUrl: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "",
      backdropUrl: movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        : "",
      genres: movie.genres.map((genre) => genre.name),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map((company) => company.name),
    };
  };
}