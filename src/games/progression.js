import {
  cons, car, cdr,
} from 'hexlet-pairs';
import getRandomNumber from '../numberGenerator';

const min = 0;
const maxSizeOfProg = 11; // max size of progression + 1;

const changeMembAndMass = (mass) => {
  const elseMass = mass;
  const changeMemb = getRandomNumber(min, maxSizeOfProg);
  elseMass[changeMemb] = '..';
  return cons(changeMemb, elseMass);
};

const minFirstMembOfProgres = 0;
const maxFirstMembOfProgres = 30;
const minStepOfProgression = 0;
const maxStepOfProgression = 30;
const leghtOfProgression = 10;

const progression = () => {
  const firstMemberOfProgression = getRandomNumber(minFirstMembOfProgres, maxFirstMembOfProgres);
  const stepOfProgression = getRandomNumber(minStepOfProgression, maxStepOfProgression);
  const massiveOfProgression = [];
  for (let i = 0; i < leghtOfProgression; i += 1) {
    massiveOfProgression[i] = firstMemberOfProgression + i * stepOfProgression;
  }
  const changedMembAndNewMass = changeMembAndMass(massiveOfProgression);
  const changedMember = firstMemberOfProgression + stepOfProgression * car(changedMembAndNewMass);
  const changedMass = cdr(changedMembAndNewMass).join(' ');

  return cons(changedMass, changedMember);
};

export default progression;
