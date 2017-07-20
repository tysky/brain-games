import { cons } from 'hexlet-pairs';
import { flow } from '..';

const message = 'What is the result of the expression?';
const calcGame = () => {
  const firstOperand = Math.floor(Math.random() * 100);
  const secondOperand = Math.floor(Math.random() * 100);
  const randomNumber = Math.floor((Math.random() * 3) + 1);
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
  flow(message, calcGame);
};
