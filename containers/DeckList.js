import React from 'react';
import { connect } from 'react-redux';

import DeckList from '../components/DeckList';

const mapStateToProps = (state, { navigation }) => ({
  decks: Object.keys(state).map(key => state[key]),
  navigation
});

export default DeckListContainer = connect(mapStateToProps)(DeckList);
