import readlineSync from 'readline-sync';
import {
  car, cdr,
} from 'hexlet-pairs';

const numberOfRounds = 3;
const engine = (gameName, userName) => {
  const rules = cdr(gameName());
  console.log(rules);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const result = gameName();
    const transmittedQuestion = car(car(result));
    const correctAnswer = String(cdr((car(result))));
    const answer = readlineSync.question(`Question: ${transmittedQuestion} `);
    if (String(correctAnswer) === answer) {
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
