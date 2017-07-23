import { cons } from 'hexlet-pairs';
import { playGame } from '..';
import getRandomNumber from '../generate-random-number';


const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const message = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondumber = getRandomNumber(1, 100);
  const correctAnswer = String(gcd(firstNumber, secondumber));
  const question = `${firstNumber} ${secondumber}`;
  return cons(question, correctAnswer);
};

export default () => {
  playGame(message, gcdGame);
};
