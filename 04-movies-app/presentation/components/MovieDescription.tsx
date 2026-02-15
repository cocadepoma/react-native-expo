import { View, Text } from 'react-native'
import React from 'react'
import { CompleteMovie } from '@/infrastucture/interfaces/movie'

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      {/* Title */}
      <View className='mb-4'>
        <Text className='text-3xl font-bold'>{movie.title}</Text>
        {movie.originalTitle !== movie.title && (
          <Text className='text-lg text-gray-500 mt-1'>{movie.originalTitle}</Text>
        )}
      </View>

      {/* Rating and Release Date */}
      <View className='flex flex-row mb-4 items-center'>
        <View className='flex flex-row items-center mr-6'>
          <Text className='text-yellow-500 text-2xl mr-1'>⭐</Text>
          <Text className='text-lg font-semibold'>{movie.rating.toFixed(1)}</Text>
        </View>
        <Text className='text-base text-gray-600'>
          {new Date(movie.releaseDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Text>
      </View>

      {/* Genres */}
      {movie.genres.length > 0 && (
        <View className='mb-4'>
          <Text className='text-base font-semibold mb-2'>Genres</Text>
          <View className='flex flex-row flex-wrap'>
            {movie.genres.map((genre, index) => (
              <View
                key={index}
                className='bg-purple-100 px-3 py-1 rounded-full mr-2 mb-2'
              >
                <Text className='text-purple-700 text-sm'>{genre}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Duration and Budget */}
      <View className='flex flex-row mb-4 flex-wrap'>
        <View className='mr-6 mb-2'>
          <Text className='text-sm text-gray-500'>Duration</Text>
          <Text className='text-base font-semibold'>{Math.floor(movie.duration / 60)}h {movie.duration % 60}min</Text>
        </View>
        {movie.budget > 0 && (
          <View className='mb-2'>
            <Text className='text-sm text-gray-500'>Budget</Text>
            <Text className='text-base font-semibold'>
              ${(movie.budget / 1000000).toFixed(1)}M
            </Text>
          </View>
        )}
      </View>

      {/* Description */}
      <View className='mb-4'>
        <Text className='text-base font-semibold mb-2'>Synopsis</Text>
        <Text className='text-base text-gray-700 leading-6'>{movie.description}</Text>
      </View>

      {/* Production Companies */}
      {movie.productionCompanies.length > 0 && (
        <View className='mb-6'>
          <Text className='text-base font-semibold mb-2'>Production Companies</Text>
          <Text className='text-base text-gray-600'>
            {movie.productionCompanies.join(' • ')}
          </Text>
        </View>
      )}
    </View>
  )
}

export default MovieDescription