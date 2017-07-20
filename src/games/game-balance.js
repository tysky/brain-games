import { cons } from 'hexlet-pairs';
import { flow } from '..';

const message = 'Balance the given number.';
const balanceGame = () => {
  // const randomNumber = Math.floor(Math.random() * 100);
  // const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  // return cons(randomNumber, correctAnswer);
};
export default () => {
  flow(message, balanceGame);
};
