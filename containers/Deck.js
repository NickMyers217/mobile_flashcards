import React from 'react';
import { connect } from 'react-redux';

import Deck from '../components/Deck';

const mapStateToProps = (state, { navigation }) => ({
  deck: state[navigation.state.params.title],
  navigation
});

export default DeckContainer = connect(mapStateToProps)(Deck);
