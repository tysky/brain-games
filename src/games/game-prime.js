import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const message = 'Is this number prime?';

const primeGame = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const isPrime = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const question = randomNumber;
  const correctAnswer = isPrime(randomNumber);
  return cons(question, correctAnswer);
};

export default () => {
  playGame(message, primeGame);
};
