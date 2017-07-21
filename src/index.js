import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const playGame = (message, game) => {
  console.log('Welcome to Brain Games');
  console.log(message);
  const name = askName();
  const playOneRound = (user, numberOfRound) => {
    if (numberOfRound === 0) {
      return console.log('Congratulations,', user);
    }
    const paramsOfRound = game();
    console.log('Question:', car(paramsOfRound));
    const answer = readlineSync.question('Your answer ');
    const correctAnswer = cdr(paramsOfRound);
    if (answer === correctAnswer) {
      console.log('Correct!');
      return playOneRound(user, numberOfRound - 1);
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    return console.log(`Let's try again, ${user}!`);
  };
  return playOneRound(name, 3);
};
