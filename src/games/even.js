import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../utils';
import engine from '../engine';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0);

const min = 1;
const max = 100;

const getResult = () => {
  const question = getRandomNumber(min, max);
  const answer = isEven(question) ? 'yes' : 'no';

  const questionAndAnswer = cons(question, answer);

  return questionAndAnswer;
};
const runGame = () => engine(getResult, gameDescription);
export default runGame;
