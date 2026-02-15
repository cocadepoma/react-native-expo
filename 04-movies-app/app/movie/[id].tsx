import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/presentation/hooks/useMovie';
import MovieHeader from '@/presentation/components/MovieHeader';
import MovieDescription from '@/presentation/components/MovieDescription';
import MovieCast from '@/presentation/components/MovieCast';

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className='justify-center items-center flex-1 flex'>
        <Text className='mb-4'>Loading movie details...</Text>
        <ActivityIndicator color="purple" size="large" />
      </View>
    )
  }

  return (
    <ScrollView>
      <MovieHeader
        poster={movieQuery.data.posterUrl}
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
      />

      <MovieDescription movie={movieQuery.data} />

      {castQuery.data && castQuery.data.length > 0 && (
        <MovieCast cast={castQuery.data} />
      )}
    </ScrollView>
  )
}

export default MovieScreen