import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastucture/interfaces/cast";
import { CreditsResponse } from "@/infrastucture/interfaces/moviedb-cast-response";
import { CastMapper } from "@/infrastucture/mappers/cast";

export const getMovieCastActions = async (id: number | string): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${id}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw 'Cannot fetch movie by ID';
  }
}
