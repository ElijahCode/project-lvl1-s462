import {
  cons, car, cdr,
} from 'hexlet-pairs';
import getRandomNumber from '../utils';

const gameRules = 'What number is missing in the progression?';

const min = 0;
const maxSize = 10;

const hideANumber = (mass) => {
  const elseMass = mass.slice(0);
  const changeMemb = getRandomNumber(min, maxSize);
  elseMass[changeMemb] = '..';
  return cons(changeMemb, elseMass);
};

const minFirstMember = 0;
const maxFirstMember = 30;
const minDiff = 0;
const maxDiff = 30;


const getResult = () => {
  const firstMember = getRandomNumber(minFirstMember, maxFirstMember);
  const diff = getRandomNumber(minDiff, maxDiff);
  const members = [];
  for (let i = 0; i < maxSize; i += 1) {
    members[i] = firstMember + i * diff;
  }
  const changedMembAndNewMass = hideANumber(members);

  const result = members[car(changedMembAndNewMass)];
  const question = cdr(changedMembAndNewMass).join(' ');

  const finalResult = cons(question, result);
  return cons(finalResult, gameRules);
};

export default getResult;
