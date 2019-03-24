import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  const smallerNumb = (num1 > num2) ? num2 : num1;
  const iter = (divisor, number1, number2) => {
    if (number1 % divisor === 0 && number2 % divisor === 0) {
      return divisor;
    }
    return iter(divisor - 1, number1, number2);
  };
  return iter(smallerNumb, num1, num2);
};

const min = 0;
const max = 100;

const getResult = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const result = findGCD(number1, number2);
  const question = `${number1} ${number2}`;

  const finalResult = cons(question, result);
  return cons(finalResult, gameRules);
};
export default getResult;
