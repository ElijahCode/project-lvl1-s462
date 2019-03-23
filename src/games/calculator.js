import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from 'hexlet-pairs';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomOperand = (num1, num2) => {
  const mindet = 1;
  const maxdet = 4;
  const numberForPlus = mindet;
  const numberForMinus = 2;
  const deter = getRandomNumber(mindet, maxdet);
  switch (deter) {
    case numberForPlus:
      return cons(`${num1} + ${num2}`, num1 + num2);
    case numberForMinus:
      return cons(`${num1} - ${num2}`, num1 - num2);
    default:
      return cons(`${num1} * ${num2}`, num1 * num2);
  }
};

const calc = () => {
  const min = 0;
  const max = 100;
  console.log('What is the result of the expression?.');
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);

  const result = getRandomOperand(number1, number2);

  const answer = readlineSync.question(`Question: ${car(result)}`);
  return cons(Number(answer), cdr(result));
};

export default calc;
