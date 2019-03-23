import readlineSync from 'readline-sync';
import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../numberGenerator';

const findDivisor = (divisor, num1, num2) => {
  if (num1 % divisor === 0 && num2 % divisor === 0) {
    return divisor;
  }
  return findDivisor(divisor - 1, num1, num2);
};

const min = 0;
const max = 100;

const getGCD = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const answer = Number(readlineSync.question(`Question: ${number1} ${number2}`));
  const div = findDivisor((number1 > number2) ? number2 : number1, number1, number2);
  return cons(answer, div);
};
export default getGCD;
