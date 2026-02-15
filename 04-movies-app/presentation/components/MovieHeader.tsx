import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({
  poster,
  originalTitle,
  title,
}: Props) => {
  const { height } = useWindowDimensions();
  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        start={[0, 0]}
        style={{ height: height * 0.7, position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}
      />

      <View
        style={{ position: 'absolute', top: 40, left: 20, zIndex: 99 }}
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="white" className="shadow" />
        </Pressable>
      </View>

      <View
        style={{ height: height * 0.7 }}
        className='shadow-xl shadow-black/20'
      >
        <View className='flex-1 rounded-b-[25px] overflow-hidden'>
          <Image
            className='flex-1'
            source={{ uri: poster }}
            resizeMode='cover'
          />
        </View>

        <View className="px-2 mt-4">
          <Text className='text-sm text-gray-500 px-4'>{title}</Text>
          <Text className='text-2xl font-bold px-4'>{originalTitle}</Text>
        </View>
      </View>
    </>
  )
}

export default MovieHeader