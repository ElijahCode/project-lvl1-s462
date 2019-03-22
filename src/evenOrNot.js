import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const game = () => {
  console.log('Welocome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const min = 1;
    const max = 100;
    const number = getRandomNumber(min, max);
    const answer = readlineSync.question(`QUESTION: ${number}`);
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else if (number % 2 === 0 && answer === 'no') {
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      console.log(`Let's try again, ${userName}!`);
      return undefined;
    } else if (number % 2 !== 0 && answer === 'yes') {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log(`Let's try again, ${userName}!`);
      return undefined;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}`);
    }
  }

  return undefined;
};
export default game;
