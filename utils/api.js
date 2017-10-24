import { AsyncStorage } from 'react-native';

const STATE_KEY = 'state';

export const getDecks = () =>
  AsyncStorage
    .getItem(STATE_KEY)
    .then(JSON.parse)
    .catch(console.error);

export const saveDecks = (decks) =>
  AsyncStorage
    .mergeItem(STATE_KEY, JSON.stringify(decks))
    .catch(console.error);

export const clearDecks = () => AsyncStorage.clear();
