import React from 'react'
import { Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import ThemedView from '@/presentation/shared/ThemedView'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemedButton from '@/presentation/shared/ThemedButton'

export default function ModalScreen() {
  return (
    <ThemedView 
      margin={false} 
      className='justify-center items-center flex-1'
      bgColor="#a52182"
    >
      <ThemedText>Hello I am another modal</ThemedText>

      <ThemedButton
        onPress={() => {
          router.dismiss() 
        }}
      >
        Close
      </ThemedButton>

      <StatusBar 
        style={Platform.OS === 'ios' ? 'light' : 'auto'} 
      />
    </ThemedView>
  )
}