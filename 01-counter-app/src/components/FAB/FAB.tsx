import React from 'react'
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native'

interface FABProps {
  label: string;
  position?: 'left' | 'right';
  onPress: () => void;
  onLongPress?: () => void;
}

export const FAB = ({
  label = '+1',
  position = 'right',
  onPress,
  onLongPress,
}: FABProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton, position === 'left' ? styles.leftFloatingButton : styles.rightFloatingButton,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#083027',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 3,
  },
  leftFloatingButton: {
    left: 20,
  },
  rightFloatingButton: {
    right: 20,
  },
});