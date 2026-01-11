import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { products } from '@/store/products.store';

const ProdcutScreen = () => {
  const params = useLocalSearchParams();

  const product = products.find(p => p.id === params.id);

  if(!product) return <Redirect href='/' />
  return (
    <View className='px-5 mt-2'>
      <Text className='text-3xl font-work-black mb-4'>{product.title}</Text>
      <Text className='text-lg mb-4'>{product.description}</Text>
      <Text className='text-2xl font-work-black'>${product.price}</Text>
    </View>
  )
}

export default ProdcutScreen