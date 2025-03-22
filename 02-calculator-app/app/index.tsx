import { View, Text } from 'react-native'

import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorBottom'

import { Colors } from '@/constants/Colors'

import { globalStyles } from '@/styles/global-styles'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {
  const {
    formula,
    number,
    prevNumber,
    buildNumber,
    clear,
    toggleSign,
    deleteLastCharacter,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>

      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">
          {formula}
        </ThemeText>

        {
          formula === prevNumber
            ? (
              <ThemeText variant="h2"></ThemeText>
            )
            : (
              <ThemeText variant="h2">
                {prevNumber}
              </ThemeText>
            )
        }

      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          backgroundColor={Colors.lightGray}
          labelColor={Colors.background}
          onPress={clear}
        />
        <CalculatorButton
          label="+/-"
          backgroundColor={Colors.lightGray}
          labelColor={Colors.background}
          onPress={toggleSign}
        />
        <CalculatorButton
          label="del"
          backgroundColor={Colors.lightGray}
          labelColor={Colors.background}
          onPress={deleteLastCharacter}
        />
        <CalculatorButton
          label="÷"
          backgroundColor={Colors.orange}
          onPress={divideOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          backgroundColor={Colors.darkGray}
          onPress={() => buildNumber('7')}
        />
        <CalculatorButton
          label="8"
          backgroundColor={Colors.darkGray}
          onPress={() => buildNumber('8')}
        />
        <CalculatorButton
          label="9"
          backgroundColor={Colors.darkGray}
          onPress={() => buildNumber('9')}
        />
        <CalculatorButton
          label="x"
          backgroundColor={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          backgroundColor={Colors.darkGray}
          onPress={() => buildNumber('4')}
        />
        <CalculatorButton
          label="5"
          backgroundColor={Colors.darkGray}
          onPress={() => buildNumber('5')}
        />
        <CalculatorButton
          label="6"
          backgroundColor={Colors.darkGray}
          onPress={() => buildNumber('6')}
        />
        <CalculatorButton
          label="-"
          backgroundColor={Colors.orange}
          onPress={subtractOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          backgroundColor={Colors.darkGray}
          onPress={() => buildNumber('1')}
        />
        <CalculatorButton
          label="2"
          backgroundColor={Colors.darkGray}
          onPress={() => buildNumber('2')}
        />
        <CalculatorButton
          label="3"
          backgroundColor={Colors.darkGray}
          onPress={() => buildNumber('3')}
        />
        <CalculatorButton
          label="+"
          backgroundColor={Colors.orange}
          onPress={addOperation}
        />
      </View>


      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          width={180}
          backgroundColor={Colors.darkGray}
          onPress={() => buildNumber('0')}
        />
        <CalculatorButton
          label="."
          backgroundColor={Colors.darkGray}
          onPress={() => buildNumber('.')}
        />
        <CalculatorButton
          label="="
          backgroundColor={Colors.darkGray}
          onPress={calculateResult}
        />
      </View>

    </View>
  )
}

export default CalculatorApp