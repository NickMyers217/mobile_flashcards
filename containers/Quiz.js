import React from 'react';
import { connect } from 'react-redux';

import Quiz from '../components/Quiz';

const mapStateToProps = (state, { navigation }) => ({
  deck: state[navigation.state.params.title],
  navigation
});

export default QuizContainer = connect(mapStateToProps)(Quiz);
