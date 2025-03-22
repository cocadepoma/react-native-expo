import { Text, Pressable } from 'react-native'
import * as Haptics from 'expo-haptics';

import { Colors } from '@/constants/Colors';

import { globalStyles } from '@/styles/global-styles';

interface Props {
  label: string;
  backgroundColor: string;
  width?: number;
  labelColor?: string;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  labelColor = Colors.textPrimary,
  backgroundColor = Colors.darkGray,
  width = 80,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor,
        opacity: pressed ? 0.8 : 1,
        width,
      })}
      onPress={() => {
        Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Success
        );

        onPress();
      }}
    >
      <Text
        style={[
          globalStyles.buttonText,
          { color: labelColor },
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton