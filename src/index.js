import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const flow = (message, game) => {
  console.log('Welcome to Brain Games');
  console.log(message);
  const name = askName();
  const gameRounds = (user, numberOfRounds) => {
    if (numberOfRounds === 0) {
      return console.log('Congratulations,', user);
    }
    const paramsOfRound = game();
    console.log('Question:', car(paramsOfRound));
    const answer = readlineSync.question('Your answer ');
    const correctAnswer = cdr(paramsOfRound);
    if (answer === correctAnswer) {
      console.log('Correct!');
      return gameRounds(user, numberOfRounds - 1);
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    return console.log(`Let's try again, ${user}!`);
  };
  return gameRounds(name, 3);
};
