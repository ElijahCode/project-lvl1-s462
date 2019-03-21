import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welocome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi, ${userName}!`);

  const number1 = 15;
  const number2 = 6;
  const number3 = 7;
  const answer1 = readlineSync.question(`QUESTION: ${number1}`);
  if (number1 % 2 === 0 && answer1 === 'yes') {
    console.log('Correct!');
  } else if (number1 % 2 !== 0 && answer1 === 'no') {
    console.log('Correct!');
  } else if (number1 % 2 === 0 && answer1 === 'no') {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".');
    console.log(`Let's try again, ${userName}!`);
    return undefined;
  } else if (number1 % 2 !== 0 && answer1 === 'yes') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    console.log(`Let's try again, ${userName}!`);
    return undefined;
  }
  const answer2 = readlineSync.question(`QUESTION: ${number2}`);
  if (number2 % 2 === 0 && answer2 === 'yes') {
    console.log('Correct!');
  } else if (number2 % 2 !== 0 && answer2 === 'no') {
    console.log('Correct!');
  } else if (number2 % 2 === 0 && answer2 === 'no') {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".');
    console.log(`Let's try again, ${userName}!`);
    return undefined;
  } else if (number2 % 2 !== 0 && answer2 === 'yes') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    console.log(`Let's try again, ${userName}!`);
    return undefined;
  }
  const answer3 = readlineSync.question(`QUESTION: ${number3}`);
  if (number3 % 2 === 0 && answer3 === 'yes') {
    console.log('Correct!');
    console.log(`Congratulations, ${userName}`);
  } else if (number3 % 2 !== 0 && answer3 === 'no') {
    console.log('Correct!');
    console.log(`Congratulations, ${userName}`);
  } else if (number3 % 2 === 0 && answer3 === 'no') {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".');
    console.log(`Let's try again, ${userName}!`);
    return undefined;
  } else if (number3 % 2 !== 0 && answer3 === 'yes') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    console.log(`Let's try again, ${userName}!`);
    return undefined;
  }
  return undefined;
};
export default game;
