import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infrastucture/interfaces/movie'
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  className?: string;
  title?: string;

  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  movies,
  title = "",
  className = "",
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);

  const onScroll = async (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndReached = (contentOffset.x + layoutMeasurement.width + 500) >= contentSize.width;

    if (!isEndReached) return;

    if (loadNextPage) {
      isLoading.current = true;
      loadNextPage();
      isLoading.current = false;
    }
  }

  return (
    <View className={`${className}`}>
      <Text className='text-2xl font-bold px-4 mb-3'>{title}</Text>

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.posterUrl} smallPoster />
        )}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
    </View>
  )
}

export default MovieHorizontalList