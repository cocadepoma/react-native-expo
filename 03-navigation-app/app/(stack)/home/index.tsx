import { View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {
  return (
    <View className='px-10'>
      <CustomButton
        color='primary'
        className='mb-2'
        onPress={() => router.push('/products')}
      >
        Go to Products
      </CustomButton>

      <CustomButton
        color='secondary'
        className='mb-2'
        onPress={() => router.push('/profile')}
      >
        Go to Profile
      </CustomButton>

      <CustomButton
        className='mb-2'
        color='tertiary'
        onPress={() => router.push('/settings')}
      >
        Go to Settings
      </CustomButton>

      <CustomButton
        className='mb-2'
        color='tertiary'
        variant='text-only'
        onPress={() => router.push('/settings')}
      >
        Test
      </CustomButton>
    </View>
  )
}

export default HomeScreen