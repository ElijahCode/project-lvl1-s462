import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numb) => {
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

const getResult = () => {
  const question = getRandomNumber(min, max);
  const result = (isPrime(question) === true) ? 'yes' : 'no';

  const finalResult = cons(question, result);
  return cons(finalResult, gameRules);
};

export default getResult;
