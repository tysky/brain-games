import { flow } from '..';

export default () => {
  const message = 'What is the result of the expression?';
  // const getRandomNumber = () => Math.floor(Math.random() * 100);
  // const getCorrectAnswer = number => (number % 2 === 0 ? 'yes' : 'no');
  flow(message, getRandomNumber, getCorrectAnswer);
};
