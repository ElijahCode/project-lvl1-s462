import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../numberGenerator';

const getResult = (predi) => {
  const result = (predi === true) ? 'yes' : 'no';
  return result;
};

const isEven = (num) => {
  const itIsEvenAnswer = (num % 2 === 0);
  return getResult(itIsEvenAnswer);
};

const min = 1;
const max = 100;

const game = () => {
  const result = getRandomNumber(min, max);
  return cons(result, isEven(result));
};
export default game;
