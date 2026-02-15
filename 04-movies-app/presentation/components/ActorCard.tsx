import { View, Text, Image } from 'react-native'
import React from 'react'
import { Cast } from '@/infrastucture/interfaces/cast'

interface Props {
  actor: Cast;
}

const ActorCard = ({ actor }: Props) => {
  return (
    <View className='mr-4 w-24'>
      <Image
        source={{ uri: actor.avatar }}
        className='w-24 h-24 rounded-full bg-gray-200'
        resizeMode='cover'
      />
      <Text className='text-sm font-semibold text-center mt-2' numberOfLines={2}>
        {actor.name}
      </Text>
      <Text className='text-xs text-gray-500 text-center' numberOfLines={2}>
        {actor.character}
      </Text>
    </View>
  )
}

export default ActorCard