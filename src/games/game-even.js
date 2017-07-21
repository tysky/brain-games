import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const message = 'Answer "yes" if number even otherwise answer "no".';
const evenGame = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return cons(randomNumber, correctAnswer);
};
export default () => {
  playGame(message, evenGame);
};
