import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useInfiniteQuery({
    queryKey: ['movies', 'now-playing'],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => nowPlayingAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const popularQuery = useInfiniteQuery({
    queryKey: ['movies', 'popular'],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => popularMoviesAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const topRatedQuery = useInfiniteQuery({
    queryKey: ['movies', 'top-rated'],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => topRatedMoviesAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const upComingQuery = useInfiniteQuery({
    queryKey: ['movies', 'upcoming'],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => upcomingMoviesAction({ page: pageParam }),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upComingQuery,
  };
};