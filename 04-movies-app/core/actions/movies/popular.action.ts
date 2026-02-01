import { movieApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastucture/interfaces/movie";
import { MovieDBMoviesResponse } from "@/infrastucture/interfaces/movie-db-response";
import { MovieMapper } from "@/infrastucture/mappers/movie";

export const popularMoviesAction = async (): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular');
    return data.results.map(MovieMapper.fromTheMovieDBToMovie);
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw 'Cannot fetch popular movies';
  }
};