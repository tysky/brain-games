import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const message = 'Balance the given number.';

const getGreatestDigit = (number) => {
  let greatest = '0';
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] > greatest) {
      greatest = number[i];
    }
  }
  return greatest;
};

const getSmallestDigit = (number) => {
  let smallest = '9';
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] < smallest) {
      smallest = number[i];
    }
  }
  return smallest;
};

const sortBalancedNumber = (number) => {
  let smallestPart = '';
  let greatestPart = '';
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] === getSmallestDigit(number)) {
      smallestPart += number[i];
    } else {
      greatestPart += number[i];
    }
  }
  return smallestPart + greatestPart;
};

const balanceGame = () => {
  const randomNumber = Math.floor(Math.random() * 9990) + 10;
  const gameLogic = (number) => {
    if (number.length === 1) {
      return number;
    }
    const maxDigit = getGreatestDigit(number);
    const minDigit = getSmallestDigit(number);
    if (maxDigit - minDigit <= 1) {
      return sortBalancedNumber(number);
    }
    let balancedMax = Number(maxDigit);
    let balancedMin = Number(minDigit);
    while (balancedMax - balancedMin > 1) {
      balancedMax -= 1;
      balancedMin += 1;
    }
    const balanced = number.replace(maxDigit,
          String(balancedMax)).replace(minDigit, String(balancedMin));
    return gameLogic(balanced);
  };
  return cons(randomNumber, gameLogic(String(randomNumber)));
};

export default () => {
  playGame(message, balanceGame);
};
