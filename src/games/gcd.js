import readlineSync from 'readline-sync';
import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../numberGenerator';

const getGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const min = 0;
  const max = 100;
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const answer = readlineSync.question(`Question: ${number1} ${number2}`);
  const iter = (div) => {
    if (number1 % div === 0 && number2 % div === 0) {
      return cons(Number(answer), div);
    }
    return iter(div - 1);
  };
  return iter(((number1 > number2) ? number2 : number1));
};
export default getGCD;
