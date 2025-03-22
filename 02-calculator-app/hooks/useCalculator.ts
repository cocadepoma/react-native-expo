import { useEffect, useRef, useState } from "react"

enum Operator {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = 'x',
  DIVIDE = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>('0');

  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firtsFormularPart = formula.split(' ').at(0);

      setFormula(`${firtsFormularPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();

    setPrevNumber(`${subResult}`);
  }, [formula]);

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.ADD:
        return num1 + num2;
      case Operator.SUBTRACT:
        return num1 - num2;
      case Operator.MULTIPLY:
        return num1 * num2;
      case Operator.DIVIDE: { }
        return num1 / num2;
      default:
        return num1;
    }
  };

  const calculateResult = () => {
    const subResult = calculateSubResult();

    setFormula(`${subResult}`);
    lastOperation.current = undefined;
    setPrevNumber('0');
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        setNumber(number + numberString);
        return;
      }

      // Evaluate if it's another 0 and there's no decimal point
      if (numberString === '0' && number.includes('.')) {
        setNumber(number + numberString);
        return;
      }

      // Evaluate if it's different from 0 and there's no decimal point
      if (numberString !== '0' && !number.includes('.')) {
        setNumber(numberString);
        return;
      }

      // Avoid adding more than one 0
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
    }

    setNumber(number + numberString);
  }

  const clear = () => {
    setNumber('0');
    setPrevNumber('0');
    setFormula('0');
    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber(`-${number}`);
    }
  };

  const deleteLastCharacter = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    }

    setPrevNumber(number);
    setNumber('0');
  };

  const divideOperation = () => {
    lastOperation.current = Operator.DIVIDE;
    setLastNumber();
  };

  const multiplyOperation = () => {
    lastOperation.current = Operator.MULTIPLY;
    setLastNumber();
  };

  const subtractOperation = () => {
    lastOperation.current = Operator.SUBTRACT;
    setLastNumber();
  };

  const addOperation = () => {
    lastOperation.current = Operator.ADD;
    setLastNumber();
  };

  return {
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
    calculateSubResult,
    calculateResult,
  }
}
