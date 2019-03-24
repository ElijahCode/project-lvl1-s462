import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0);

const min = 1;
const max = 100;

const getResult = () => {
  const question = getRandomNumber(min, max);
  const result = (isEven(question) === true) ? 'yes' : 'no';

  const finalResult = cons(question, result);

  return cons(finalResult, gameRules);
};
export default getResult;
