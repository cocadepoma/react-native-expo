import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Cast } from '@/infrastucture/interfaces/cast'
import ActorCard from './ActorCard'

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className='mb-6'>
      <Text className='text-2xl font-bold px-5 mb-3'>Cast</Text>
      <FlatList
        horizontal
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActorCard actor={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  )
}

export default MovieCast