import {
  cons, car, cdr,
} from 'hexlet-pairs';
import getRandomNumber from '../numberGenerator';

const min = 0;
const maxSizeOfProg = 10; // max size of progression;

const changeMembAndMass = (mass) => {
  const elseMass = mass.slice(0);
  const changeMemb = getRandomNumber(min, maxSizeOfProg);
  elseMass[changeMemb] = '..';
  return cons(changeMemb, elseMass);
};

const minA1 = 0;
const maxA1 = 30;
const minD = 0;
const maxD = 30;
const numbOfMembers = 10;

const createProgression = () => {
  const a1 = getRandomNumber(minA1, maxA1);
  const d = getRandomNumber(minD, maxD);
  const members = [];
  for (let i = 0; i < numbOfMembers; i += 1) {
    members[i] = a1 + i * d;
  }
  const changedMembAndNewMass = changeMembAndMass(members);

  const member = members[car(changedMembAndNewMass)];
  const newMembers = cdr(changedMembAndNewMass).join(' ');

  return cons(newMembers, member);
};

export default createProgression;
