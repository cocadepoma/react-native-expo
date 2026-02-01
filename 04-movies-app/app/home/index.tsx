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
          movies={nowPlayingQuery.data || []}
        />

        <MovieHorizontalList
          movies={popularQuery.data || []}
          title="Popular Movies"
          className='mb-5'
        />

        <MovieHorizontalList
          movies={topRatedQuery.data || []}
          title="Top Rated Movies"
          className='mb-5'
        />

        <MovieHorizontalList
          movies={upComingQuery.data || []}
          title="Upcoming Movies"
        />
        <MovieHorizontalList
          movies={upComingQuery.data || []}
          title="Upcoming Movies"
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen