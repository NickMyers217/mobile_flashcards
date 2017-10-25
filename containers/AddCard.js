import React from 'react';
import { connect } from 'react-redux';

import AddCard from '../components/AddCard';
import { addCardToDeck } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onCardAdd: (title, card) => dispatch(addCardToDeck(title, card))
});

export default AddCardContainer = connect(null, mapDispatchToProps)(AddCard);
