import { movieApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastucture/interfaces/movie";
import { MovieDBMoviesResponse } from "@/infrastucture/interfaces/movie-db-response";
import { MovieMapper } from "@/infrastucture/mappers/movie";

interface Options {
  page?: number;
  limit?: number;
}

export const upcomingMoviesAction = async ({ page = 1, limit = 10 }: Options = {}): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming', {
      params: {
        page: page,
      },
    });
    return data.results.map(MovieMapper.fromTheMovieDBToMovie);
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw 'Cannot fetch upcoming movies';
  }
};