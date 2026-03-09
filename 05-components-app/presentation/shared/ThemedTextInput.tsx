import { TextInputProps, TextInput } from 'react-native'
import React from 'react'

interface Props extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...props }: Props) => {
  return (
    <TextInput
      className={`py-4 px-2 text-black dark:text-white ${className}`}
      placeholderTextColor="grey"
      {...props}
    />
  )
}

export default ThemedTextInput