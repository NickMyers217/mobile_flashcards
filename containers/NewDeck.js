import React from 'react';
import { connect } from 'react-redux';

import { saveNewDeck } from '../actions';
import NewDeck from '../components/NewDeck';

const mapDispatchToProps = (dispatch) => ({
  onDeckAdd: (title) => dispatch(saveNewDeck(title))
});

export default NewDeckContainer = connect(null, mapDispatchToProps)(NewDeck);
