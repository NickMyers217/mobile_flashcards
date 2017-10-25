import React from 'react';
import { connect } from 'react-redux';

import Quiz from '../components/Quiz';
import { clearLocalNotification, setLocalNotification } from '../utils/api';

const mapStateToProps = (state, { navigation }) => ({
  deck: state[navigation.state.params.title],
  onQuizComplete: () => {
    clearLocalNotification().then(setLocalNotification);
  },
  navigation
});

export default QuizContainer = connect(mapStateToProps)(Quiz);
