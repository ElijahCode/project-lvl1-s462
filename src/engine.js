import readlineSync from 'readline-sync';
import {
  car, cdr,
} from 'hexlet-pairs';

const numberOfRounds = 3;
const engine = (gameName, gameDescription) => {
  console.log('Welocome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi, ${userName}!`);

  console.log(gameDescription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const gameData = gameName();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer:');
    if (correctAnswer === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default engine;
