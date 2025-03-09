import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FAB } from './src/components/FAB/FAB';

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <FAB
        label="+1"
        onPress={handleIncrement}
        onLongPress={() => setCount(0)}
      />

      <FAB
        label="-1"
        onPress={handleDecrement}
        onLongPress={() => setCount(0)}
        position='left'
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 120,
    fontWeight: '100',
  },
});
