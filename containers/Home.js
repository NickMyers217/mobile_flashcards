import React from 'react';
import { connect } from 'react-redux';

import { getDecks } from '../utils/api';
import { loadDecks } from '../actions';
import Home from '../components/Home';

const mapDispatchToProps = (dispatch) => ({
  loadDecksFromStorage: () => getDecks()
    .then((decks) => dispatch(loadDecks(decks)))
});

export default HomeContainer = connect(null, mapDispatchToProps)(Home);
