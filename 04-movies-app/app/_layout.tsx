import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import '../global.css';
import { Stack } from 'expo-router';

const queryClient = new QueryClient()

const _layout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{ headerShown: false }}
      />
    </QueryClientProvider>
  )
}

export default _layout