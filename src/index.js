import readlineSync from 'readline-sync';

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const guessEvenNumber = (user, numberOfRounds) => {
  if (numberOfRounds === 0) {
    return console.log('Congratulations,', user);
  }
  const randomNumber = Math.floor(Math.random() * 100);
  console.log('Question:', randomNumber);
  const answer = readlineSync.question('Your answer ');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    return guessEvenNumber(user, numberOfRounds - 1);
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return console.log(`Let's try again, ${user}!`);
};

export const startGameEvenNumber = (numberOfRounds) => {
  console.log('Welcome to Brain Games');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = askName();
  return guessEvenNumber(name, numberOfRounds);
};
