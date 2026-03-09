import { Pressable, PressableProps, Text } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
  children: string;
  className?: string;
}

const ThemedButton = ({className, children, ...props}: Props) => {
  return (
    <Pressable 
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
      {...props} 
    >
      <Text className='text-white text-2xl'>
        {children}
      </Text>
    </Pressable>
  )
}

export default ThemedButton