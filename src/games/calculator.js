import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../utils';
import engine from '../engine';

const gameDescription = 'What is the result of the expression?.';

const operands = '+-*';

const firstIndexOfString = 0;

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
  const numberOfOperand = getRandomNumber(firstIndexOfString, operands.length);
  const operand = operands[numberOfOperand];
  const answer = String(getResult(number1, number2, operand));
  const question = `${number1} ${operand} ${number2}`;
  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

const runGame = () => engine(calc, gameDescription);
export default runGame;
