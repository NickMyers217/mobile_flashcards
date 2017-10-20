import { AsyncStorage } from 'react-native';

const STATE_KEY = 'state';

export const getDecks = () =>
  AsyncStorage
    .getItem(STATE_KEY)
    .then(JSON.parse);

export const getDeck = (title) =>
  getDecks()
    .then((state) => state && state[title] ? state[title] : null);

export const saveDeckTitle = (title) =>
  AsyncStorage
    .mergeItem(STATE_KEY, JSON.stringify({
      [title]: {
        title
      }
    }));

export const addCardToDeck = (title, card) =>
  getDeck(title)
    .then(deck => (
      deck
        ? AsyncStorage.mergeItem(STATE_KEY, JSON.stringify({
          [title]: {
            ...deck,
            questions: (deck.questions || []).concat([card])
          }
        }))
        : null
    ));
