import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../numberGenerator';

const numbIsEven = (numb) => {
  const iter = (number, acc) => {
    if (number === acc) {
      return true;
    }
    if (number % acc === 0 && number !== acc) {
      return false;
    }
    return iter(number, acc + 1);
  };
  return iter(numb, 2);
};

const min = 1;
const max = 22;

const game = () => {
  const randomNumb = getRandomNumber(min, max);
  const answer = numbIsEven(randomNumb);
  const result = (answer === true) ? 'yes' : 'no';
  return cons(randomNumb, result);
};

export default game;
