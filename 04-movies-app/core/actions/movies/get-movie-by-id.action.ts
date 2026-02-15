import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastucture/interfaces/movie";
import { MovieDBMovieResponse } from "@/infrastucture/interfaces/moviedb-movie-response";
import { MovieMapper } from "@/infrastucture/mappers/movie";

export const getMovieByIdAction = async (id: number | string): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw 'Cannot fetch movie by ID';
  }
}
