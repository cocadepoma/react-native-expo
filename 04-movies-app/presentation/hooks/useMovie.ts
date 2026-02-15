import { getMovieByIdAction } from '@/core/actions/movies/get-movie-by-id.action'
import { getMovieCastActions } from '@/core/actions/movies/get-movie-cast.action';
import { useQuery } from '@tanstack/react-query'

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  const castQuery = useQuery({
    queryKey: ['movie', id, 'cast'],
    queryFn: () => getMovieCastActions(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  return { movieQuery, castQuery };
};
