import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welocome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi, ${userName}!`);
};
export default askName;
