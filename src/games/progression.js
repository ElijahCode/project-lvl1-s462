import readlineSync from 'readline-sync';
import {
  cons,
} from 'hexlet-pairs';
import getRandomNumber from '../numberGenerator';

const minFirstMemberOfProgression = 0;
const maxFirstMemberOfProgression = 30;
const minStepOfProgression = 0;
const maxStepOfProgression = 30;
const leghtOfProgression = 10;

const progression = () => {
  const firstMemberOfProgression = getRandomNumber(minFirstMemberOfProgression, maxFirstMemberOfProgression);
  const stepOfProgression = getRandomNumber(minStepOfProgression, maxStepOfProgression);
  const massiveOfProgression = [];
  for(let i = 0; i < leghtOfProgression; i += 1) {
    massiveOfProgression[i] = firstMemberOfProgression + i * stepOfProgression;
  }
};

export default progression;
