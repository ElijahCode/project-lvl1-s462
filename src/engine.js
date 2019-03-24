import readlineSync from 'readline-sync';
import {
  car, cdr,
} from 'hexlet-pairs';

const numberOfRounds = 3;
const engine = (gameName, gameDescription) => {
  console.log('Welocome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);

  console.log(gameDescription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const result = gameName();
    const question = car(result);
    const correctAnswer = cdr(result);
    const answer = readlineSync.question(`Question: ${question} `);
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default engine;
