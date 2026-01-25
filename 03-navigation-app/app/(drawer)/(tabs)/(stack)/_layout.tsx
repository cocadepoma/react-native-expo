import React from 'react'
import { router, Stack, useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack?: boolean) => {
    if (canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: 'white' },
        headerLeft: ({tintColor, canGoBack} ) => (
          <Ionicons 
            name={canGoBack ? 'chevron-back-circle-outline' :"grid-outline"}
            className='mr-5' 
            size={20} 
            onPress={() => onHeaderLeftClick(canGoBack)} 
            color={tintColor} 
          />
        )
      }}
    >
      <Stack.Screen
        name='home/index'
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name='products/index'
        options={{ title: 'Products' }}
      />
      <Stack.Screen
        name='profile/index'
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name='settings/index'
        options={{ title: 'Settings' }}
      />
    </Stack>
  )
}

export default StackLayout