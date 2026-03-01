import { Pressable, View } from 'react-native'
import React from 'react'
import { Href, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import ThemedText from '../shared/ThemedText';
import { useThemeColor } from '@/hooks/use-theme-color';

interface Props {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const MenuItem = ({ title, icon, name, isFirst = false, isLast = false }: Props) => {
  const [routeName] = name.split('/');
  const primaryColor = useThemeColor({}, 'primary');
  
  return (
    <Pressable
      className='bg-white dark:bg-black/15 px-5 py-2'
      onPress={() => router.push(routeName as Href)}
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10,
        }),
        ...(isLast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 10,
        }),
      }}
    >
      <View className="flex-row items-center">
        <Ionicons name={icon} size={30} className="mr-5" color={primaryColor}  />
      <ThemedText type="h2">{title}</ThemedText>
      </View>
    </Pressable>
  )
}

export default MenuItem