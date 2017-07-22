import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const message = 'What number is missing in this progression?';

const getMember = (a1, d, n, index) => {
  if (n === index) {
    return '..';
  }
  return (a1 + (d * (n - 1)));
};
const generateProgression = (start, step, index) => {
  const iter = (member) => {
    if (member === 10) {
      return getMember(start, step, member, index);
    }
    return `${getMember(start, step, member, index)} ${iter(member + 1)}`;
  };
  return iter(1);
};
const progressionGame = () => {
  const step = Math.floor(Math.random() * 10);
  const startNumber = Math.floor(Math.random() * 10);
  const index = Math.floor(Math.random() * 10) + 1;
  const question = generateProgression(startNumber, step, index);
  const correctAnswer = String(startNumber + ((index - 1) * step));
  return cons(question, correctAnswer);
};

export default () => {
  playGame(message, progressionGame);
};
