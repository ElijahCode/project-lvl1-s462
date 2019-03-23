import readlineSync from 'readline-sync';
import {
  cons, /* car, cdr, */
} from 'hexlet-pairs';
import getRandomNumber from '../numberGenerator';

const massiveOfOperand = {
  plus: '+',
  minus: '-',
  multiplication: '*',
};

const mindet = 1; // getRandomOperand can return it
const maxdet = 4; // getRandomOperand never return it, watch doc for Math.Rand;
const variantForPlus = 1;
const variantForMinus = 2;

const getRandomOperand = () => {
  const determinant = getRandomNumber(mindet, maxdet);
  switch (determinant) {
    case variantForPlus:
      return massiveOfOperand.plus;
    case variantForMinus:
      return massiveOfOperand.minus;
    default:
      return massiveOfOperand.multiplication;
  }
};

const getResult = (num1, num2, operand) => {
  if (operand === '+') {
    return num1 + num2;
  }
  if (operand === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const min = 0;
const max = 100;

const calc = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);

  const randomOperand = getRandomOperand();

  const answer = Number(readlineSync.question(`Question: ${number1} ${randomOperand} ${number2}`));
  const result = getResult(number1, number2, randomOperand);
  return cons(answer, result);
};

export default calc;
