import { View } from 'react-native'
import React from 'react'
import { router, useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

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

      <CustomButton onPress={onToggleDrawer}>
        Open Drawer
      </CustomButton>
    </View>
  )
}

export default HomeScreen