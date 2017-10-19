import { AsyncStorage } from 'react-native';

const STATE_KEY = 'state';
// Example of the state structure
const STATE_EXAMPLE = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

export const getDecks = () => AsyncStorage
  .getItem(STATE_KEY);

export const getDeck = (title) => AsyncStorage
  .getItem(`${STATE_KEY}:${title}`);

export const saveDeckTitle = (title) => AsyncStorage
  .setItem(`${STATE_KEY}:${title}`, JSON.stringify({
    title,
    questions: []
  }));

export const addCardToDeck = (title, card) => AsyncStorage
  .mergeItem(`${STATE_KEY}:${title}`, JSON.stringify({
    questions: [card]
  }));