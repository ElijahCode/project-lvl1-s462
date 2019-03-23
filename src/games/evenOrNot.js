import readlineSync from 'readline-sync';
import {
  cons,
} from 'hexlet-pairs';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const itIsEven = (num) => {
  const itIsEvenAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return itIsEvenAnswer;
};

const game = () => {
  const min = 1;
  const max = 100;
  console.log('Answer "yes" if number even otherwise answer "no".');
  const numberForQustion = getRandomNumber(min, max);
  const answer = readlineSync.question(`QUESTION: ${numberForQustion}`);
  return cons(answer, itIsEven(numberForQustion));
};
export default game;
