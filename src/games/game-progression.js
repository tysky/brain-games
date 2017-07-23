import { cons } from 'hexlet-pairs';
import { playGame } from '..';
import getRandomNumber from '../generate-random-number';

const message = 'What number is missing in this progression?';

const getMemberOfProgression = (a1, d, n) => a1 + (d * (n - 1));

const generateProgression = (start, step, index) => {
  const iter = (n) => {
    const current = n === index ? '..' : getMemberOfProgression(start, step, n);
    if (n === 10) {
      return current;
    }
    return `${current} ${iter(n + 1)}`;
  };
  return iter(1);
};
const progressionGame = () => {
  const step = getRandomNumber(0, 10);
  const startNumber = getRandomNumber(0, 10);
  const index = getRandomNumber(1, 10);
  const question = generateProgression(startNumber, step, index);
  const correctAnswer = String(startNumber + ((index - 1) * step));
  return cons(question, correctAnswer);
};

export default () => {
  playGame(message, progressionGame);
};
