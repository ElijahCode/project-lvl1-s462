import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameRules = 'What is the result of the expression?.';

const operands = '+-*';

const firstIndexOfString = 0; // getRandomOperand can return it
const lastIndexofString = 3; // getRandomOperand never return it, watch doc for Math.Rand;

const getRandomOperand = () => {
  const stringIndex = getRandomNumber(firstIndexOfString, lastIndexofString);
  const operand = operands[stringIndex];
  return operand;
};

const getResult = (num1, num2, operand) => {
  switch (operand) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const min = 0;
const max = 100;

const calc = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);

  const randomOperand = getRandomOperand();

  const result = getResult(number1, number2, randomOperand);
  const question = `${number1} ${randomOperand} ${number2}`;

  const finalResult = cons(question, result);
  return cons(finalResult, gameRules);
};

export default calc;
