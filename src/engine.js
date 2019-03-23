import readlineSync from 'readline-sync';
import {
  car, cdr,
} from 'hexlet-pairs';
import calc from './games/calculator';
import evenOrNot from './games/even';
import gcd from './games/gcd';
import progression from './games/progression';
import prime from './games/prime';

const getGame = (nameOfGame) => {
  switch (nameOfGame) {
    case 'calc':
      return calc();
    case 'even':
      return evenOrNot();
    case 'gcd':
      return gcd();
    case 'progression':
      return progression();
    case 'prime':
      return prime();
    default:
      return undefined;
  }
};

const printRules = (nameOfGame) => {
  switch (nameOfGame) {
    case 'calc':
      console.log('What is the result of the expression?.');
      break;
    case 'even':
      console.log('Answer "yes" if number even otherwise answer "no".');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      console.log('Error!Game not founded.');
  }
  return undefined;
};

const numberOfRounds = 3;
const engine = (gameName) => {
  console.log('Welocome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi, ${userName}!`);
  printRules(gameName);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const result = getGame(gameName);
    const answer = readlineSync.question(`QUESTION:${car(result)} `);
    if (String(cdr(result)) === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${cdr(result)}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default engine;
