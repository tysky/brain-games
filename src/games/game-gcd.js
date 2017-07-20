import { cons } from 'hexlet-pairs';
import { flow } from '..';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const message = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondumber = Math.floor(Math.random() * 100);
  const correctAnswer = String(gcd(firstNumber, secondumber));
  const question = `${firstNumber} ${secondumber}`;
  return cons(question, correctAnswer);
};

export default () => {
  flow(message, gcdGame);
};
