import readlineSync from 'readline-sync';
import {
  car, cdr,
} from 'hexlet-pairs';

const engine = (game) => {
  console.log('Welocome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi, ${userName}!`);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const result = game();
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
