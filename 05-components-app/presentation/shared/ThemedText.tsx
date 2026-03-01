import { Text, TextProps } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/use-theme-color';

interface Props extends TextProps {
  className?: string;
  color?: string;
  type: 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';
}

const ThemedText = ({ className, type, color, ...props }: Props) => {
    const themedColor = useThemeColor({}, 'text');
    const textColor = color ?? themedColor;
  return (
    <Text
      className={[
        type === 'normal' && 'font-normal',
        type === 'h1' && 'text-3xl',
        type === 'h2' && 'text-xl',
        type === 'semi-bold' && 'font-bold',
        type === 'link' && 'font-normal underline text-blue-500',
        className
      ].join(' ')
    }
      style={{ color: textColor }}
      {...props}
    />
  )
}

export default ThemedText