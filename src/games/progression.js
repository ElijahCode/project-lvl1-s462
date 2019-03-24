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

const minA1 = 0;
const maxA1 = 30;
const minD = 0;
const maxD = 30;


const getResult = () => {
  const a1 = getRandomNumber(minA1, maxA1);
  const d = getRandomNumber(minD, maxD);
  const members = [];
  for (let i = 0; i < maxSize; i += 1) {
    members[i] = a1 + i * d;
  }
  const changedMembAndNewMass = hideANumber(members);

  const result = members[car(changedMembAndNewMass)];
  const question = cdr(changedMembAndNewMass).join(' ');

  const finalResult = cons(question, result);
  return cons(finalResult, gameRules);
};

export default getResult;
