import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../utils';
import engine from '../engine';

const gameDescription = 'What number is missing in the progression?';

const firstMemberIndex = 0;
const length = 10;

const minFirstMember = 0;
const maxFirstMember = 30;
const minDiff = 0;
const maxDiff = 30;

const getQuestionAndAnswer = () => {
  const firstMember = getRandomNumber(minFirstMember, maxFirstMember);
  const diff = getRandomNumber(minDiff, maxDiff);
  const members = [];
  for (let i = 0; i < length; i += 1) {
    members[i] = firstMember + i * diff;
  }
  const hiddenNumber = getRandomNumber(firstMemberIndex, length);
  const answer = String(members[hiddenNumber]);

  members[hiddenNumber] = '..';

  const question = members.join(' ');

  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

const runGame = () => engine(getQuestionAndAnswer, gameDescription);
export default runGame;
