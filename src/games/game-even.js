import { flow } from '..';

export default () => {
  const message = 'Answer "yes" if number even otherwise answer "no".';
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const getCorrectAnswer = number => (number % 2 === 0 ? 'yes' : 'no');
  flow(message, getRandomNumber, getCorrectAnswer);
};
