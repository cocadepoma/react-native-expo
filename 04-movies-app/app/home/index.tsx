import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react'

import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlideshow from '@/presentation/components/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/MovieHorizontalList';

const HomeScreen = () => {
  const {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upComingQuery,
  } = useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color="purple" size="large" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
        <Text className='text-2xl font-bold px-4 mb-2'>MoviesApp</Text>
        <MainSlideshow
          movies={nowPlayingQuery.data?.pages.flat() || []}
        />

        <MovieHorizontalList
          movies={popularQuery.data?.pages.flat() || []}
          title="Popular Movies"
          className='mb-5'
          loadNextPage={popularQuery.fetchNextPage}
        />

        <MovieHorizontalList
          movies={topRatedQuery.data?.pages.flat() || []}
          title="Top Rated Movies"
          className='mb-5'
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        <MovieHorizontalList
          movies={upComingQuery.data?.pages.flat() || []}
          title="Upcoming Movies"
          className='mb-5'
          loadNextPage={upComingQuery.fetchNextPage}
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen