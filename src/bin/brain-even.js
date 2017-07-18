import { askName, guessEvenNumber } from '..';

console.log('Welcome to Brain Games');
console.log('Answer "yes" if number even otherwise answer "no".\n');
const name = askName();
const numberOfRounds = 3;
guessEvenNumber(name, numberOfRounds);
