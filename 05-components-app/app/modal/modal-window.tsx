import React from 'react'
import { Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import ThemedView from '@/presentation/shared/ThemedView'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemedButton from '@/presentation/shared/ThemedButton'
import { router } from 'expo-router'

export default function ModalScreen() {
  return (
    <ThemedView 
      margin={false} 
      className='justify-center items-center flex-1'
      bgColor="#a52182"
    >
      <ThemedText>Hello I am a modal</ThemedText>

      <ThemedButton
        className='mb-4'
        onPress={() => {
          router.push('/modal/modal-window2')          
        }}
      >
        Another modal
      </ThemedButton>

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