import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infrastucture/interfaces/movie'
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  className?: string;
  title?: string;
}

const MovieHorizontalList = ({
  movies,
  title = "",
  className = "",
}: Props) => {
  return (
    <View className={`${className}`}>
      <Text className='text-2xl font-bold px-4 mb-3'>{title}</Text>

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.posterUrl} smallPoster />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default MovieHorizontalList