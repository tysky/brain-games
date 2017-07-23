import { cons } from 'hexlet-pairs';
import { playGame } from '..';
import getRandomNumber from '../generate-random-number';


const message = 'What is the result of the expression?';
const calcGame = () => {
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const randomNumber = getRandomNumber(1, 3);
  let question;
  let correctAnswer;
  switch (randomNumber) {
    case 1: {
      question = `${firstOperand} + ${secondOperand}`;
      correctAnswer = String(firstOperand + secondOperand);
      break;
    }
    case 2: {
      question = `${firstOperand} - ${secondOperand}`;
      correctAnswer = String(firstOperand - secondOperand);
      break;
    }
    case 3: {
      question = `${firstOperand} * ${secondOperand}`;
      correctAnswer = String(firstOperand * secondOperand);
      break;
    }
    default:
      break;
  }
  return cons(question, correctAnswer);
};
export default () => {
  playGame(message, calcGame);
};
