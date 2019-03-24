import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../utils';
import engine from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const iter = (number, acc) => {
    if (number === acc) {
      return true;
    }
    if (number % acc === 0 && number !== acc) {
      return false;
    }
    return iter(number, acc + 1);
  };
  return iter(num, 2);
};

const min = 1;
const max = 22;

const getResult = () => {
  const question = getRandomNumber(min, max);
  const answer = isPrime(question) === true ? 'yes' : 'no';

  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

const runGame = () => engine(getResult, gameDescription);
export default runGame;
