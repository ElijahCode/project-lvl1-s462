import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../numberGenerator';

const isEven = num => (num % 2 === 0);

const min = 1;
const max = 100;

const game = () => {
  const randomNumb = getRandomNumber(min, max);
  const result = (isEven(randomNumb) === true) ? 'yes' : 'no';
  return cons(randomNumb, result);
};
export default game;
