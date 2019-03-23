import readlineSync from 'readline-sync';
import {
  car, cdr,
} from 'hexlet-pairs';
import calc from './games/calculator';
import evenOrNot from './games/evenOrNot';
import gcd from './games/gcd';

const getGame = (nameOfGame) => {
  switch (nameOfGame) {
    case 'calc':
      return calc();
    case 'even':
      return evenOrNot();
    case 'gcd':
      return gcd();
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
    if (car(result) === cdr(result)) {
      console.log('Correct!');
    } else {
      console.log(`"${car(result)}" is wrong answer ;(. Correct answer was "${cdr(result)}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default engine;
