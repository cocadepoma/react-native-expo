import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store'
import { Link } from 'expo-router'

const ProductsScreen = () => {
  return (
    <View className='flex flex-1 px-4'>  
      <FlatList
       data={products}
       keyExtractor={(item, index) => item.id}
       renderItem={({ item }) => (
          <View className='mt-2'>
            <Text className='text-2xl font-work-black'>{item.title}</Text>
            <Text className='k'>{item.description}</Text>

            <View className='flex flex-row justify-between'>
              <Text className='text-lg font-work-black'>${item.price}</Text>
              <Link href={`/products/${item.id}`} className='text-blue-500'>View Details</Link>

            </View>
          </View>
       )}
     />
    </View>
  )
}

export default ProductsScreen