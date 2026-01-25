import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

import CustomDrawer from '@/components/shared/CustomDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: 'rgba(0, 0, 0, 0.4)',
        drawerActiveTintColor: 'indigo',
        sceneStyle: { backgroundColor: 'white' },
        headerShadowVisible: false,
        // headerShown: false,
      }}
    >
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User',
          title: 'User',
          drawerIcon: ({color, size}) => (
          <Ionicons name="person-circle-outline" size={size} color={color} />
        )
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: 'Tabs + Stack',
          title: 'Tabs + Stack',
          drawerIcon: ({color, size}) => (
          <Ionicons name="albums-outline" size={size} color={color} />
        )
        }}
      />

      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Schedule',
          title: 'Schedule',
          drawerIcon: ({color, size}) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          )
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout