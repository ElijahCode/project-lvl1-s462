import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from 'hexlet-pairs';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomOperand = (num1, num2) => {
  const mindet = 0;
  const maxdet = 100;
  const border1 = 33;
  const border2 = 66;
  const deter = getRandomNumber(mindet, maxdet);
  if (deter < border1) {
    return cons(`${num1} + ${num2}`, num1 + num2);
  }
  if (deter >= border1 && deter < border2) {
    return cons(`${num1} - ${num2}`, num1 - num2);
  }
  if (deter > border2) {
    return cons(`${num1} * ${num2}`, num1 * num2);
  }
  return undefined;
};
const calc = () => {
  const min = 0;
  const max = 100;
  console.log('Welocome to the Brain Games!');
  console.log('What is the result of the expression?.');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(min, max);
    const number2 = getRandomNumber(min, max);

    const result = getRandomOperand(number1, number2);

    const answer = readlineSync.question(`Question: ${car(result)}`);
    if (Number(answer) === cdr(result)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${cdr(result)}.`);
      return undefined;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}`);
    }
  }
  return undefined;
};

export default calc;
