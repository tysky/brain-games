import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const message = 'Is this number prime?';

const primeGame = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const isPrime = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  const question = randomNumber;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  playGame(message, primeGame);
};
