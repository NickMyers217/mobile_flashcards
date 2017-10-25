export const LOAD_DECKS = 'LOAD_DECKS';
export const SAVE_NEW_DECK = 'SAVE_NEW_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

export const loadDecks = (decks) => {
  return {
    type: LOAD_DECKS,
    decks
  };
};

export const saveNewDeck = (title) => {
  return {
    type: SAVE_NEW_DECK,
    title
  };
};

export const addCardToDeck = (title, card) => {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card
  };
};
