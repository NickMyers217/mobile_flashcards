import React from 'react';
import { connect } from 'react-redux';

import DeckList from '../components/DeckList';

const mapStateToProps = (state) => ({
  decks: Object.keys(state).map(key => state[key])
});

export default DeckListContainer = connect(mapStateToProps)(DeckList);
