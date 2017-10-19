const STATE = {
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

// TODO: do I need to do this?
export const initializeStorage = () => ({});

export const getDecks = () => ({});

export const getDeck = (title) => ({});

export const saveDeckTitle = (title) => ({});

export const addCardToDeck = (title, card) => ({});