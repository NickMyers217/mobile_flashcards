import {
  LOAD_DECKS,
  SAVE_NEW_DECK,
  ADD_CARD_TO_DECK
} from '../actions';

const reducer = (state={}, action) => {
  switch (action.type) {
    case LOAD_DECKS:
      return action.decks;
    case SAVE_NEW_DECK:
      return {
        ...state,
        [action.title]: { title: action.title }
      };
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [state[action.title]]: {
          ...state[action.title],
          questions: (state[action.title].questions || []).concat(action.card)
        }
      };
    default:
      return state;
  }
};

export default reducer;
