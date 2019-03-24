import readlineSync from 'readline-sync';

import engine from './engine';

import evenOrNot from './games/even';
import calc from './games/calculator';
import gcd from './games/gcd';
import progression from './games/progression';
import prime from './games/prime';

const printGames = () => {
  console.log('1. Number is even?');
  console.log('2. Result of the expression');
  console.log('3. Greatest common divisor');
  console.log('4. Arithmetic progression');
  console.log('5. Number is prime?');
};

const passGame = () => {
  console.log('Welocome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);

  printGames();

  const gameNumber = readlineSync.question('Enter the game number: ');

  switch (gameNumber) {
    case '1':
      engine(evenOrNot, userName);
      break;
    case '2':
      engine(calc, userName);
      break;
    case '3':
      engine(gcd, userName);
      break;
    case '4':
      engine(progression, userName);
      break;
    case '5':
      engine(prime, userName);
      break;
    default:
      console.log('Game not found! Try again.');
      break;
  }
};

export default passGame;
