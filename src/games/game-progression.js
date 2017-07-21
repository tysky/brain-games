import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const message = 'What number is missing in this progression?';

const progressionGame = () => {
  const diff = Math.floor(Math.random() * 10);
  const firstNumber = Math.floor(Math.random() * 10);
  const place = Math.floor(Math.random() * 8) + 2;
  // console.log(place);
  const progression = (startNumber, step) => {
    const iter = (prev, n) => {
      if (n === 1) {
        return prev + step;
      }
      return `${prev + step} ${iter(prev + step, n - 1)}`;
    };
    return `${iter(startNumber, place - 1)} .. ${iter((startNumber + (place * step)), 10 - place)}`;
  };
  const question = progression(firstNumber, diff);
  const correctAnswer = String(firstNumber + (place * diff));
  return cons(question, correctAnswer);
};

export default () => {
  playGame(message, progressionGame);
};
