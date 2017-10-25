import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Button from './Button';
import { container, mutedText, colors } from '../utils/styles';

const styles = StyleSheet.create({
  container,
  mutedText,
  toggleButton: {
    backgroundColor: colors.darkBlue,
    marginBottom: 10
  },
  correctButton: {
    backgroundColor: colors.green,
    marginBottom: 10
  },
  incorrectButton: {
    backgroundColor: colors.red
  },
  buttonText: {
    color: colors.white,
    padding: 10
  }
});

export default class Deck extends React.Component {
  state = {
    mainTextProperty: 'question',
    currentQuestion: 0,
    score: 0,
    showScore: false
  }

  toggle = () => {
    this.setState(state => ({
      ...state,
      mainTextProperty: state.mainTextProperty === 'question' ? 'answer' : 'question'
    }));
  }

  castVote = (vote) => {
    const showScore = this.state.currentQuestion + 1 >= this.props.deck.questions.length;

    if (showScore) {
      this.props.onQuizComplete();
    }

    this.setState(state => ({
      ...state,
      mainTextProperty: 'question',
      score: state.score + (vote === 'correct' ? 1 : 0),
      currentQuestion: state.currentQuestion + (showScore ? 0 : 1),
      showScore
    }));
  }

  restartQuiz = () => {
    // TODO
  };

  render() {
    const { navigation, deck, onQuizComplete } = this.props;
    const { currentQuestion, mainTextProperty, showScore, score} = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 10 }}>
          <Text style={[styles.mutedText, { fontSize: 30 }]}>
            {`${currentQuestion + 1}/${deck.questions.length}`}
          </Text>
        </View>
        {!showScore &&
          <View style={styles.container}>
            <Text style={{ fontSize: 30, marginBottom: 5 }}>
              {deck.questions[currentQuestion][mainTextProperty]}
            </Text>
            <Text style={[styles.mutedText, { marginBottom: 30 }]}>
              {mainTextProperty[0].toUpperCase() + mainTextProperty.slice(1)}
            </Text>
            <Button style={styles.toggleButton} onPress={() => this.toggle()}>
              <Text style={styles.buttonText}>Flip</Text>
            </Button>
            <Button style={styles.correctButton} onPress={() => this.castVote('correct')}>
              <Text style={styles.buttonText}>Correct</Text>
            </Button>
            <Button style={styles.incorrectButton} onPress={() => this.castVote('incorrect')}>
              <Text style={styles.buttonText}>Incorrect</Text>
            </Button>
          </View>}
        {showScore &&
          <View style={styles.container}>
            <Text style={{ fontSize: 30, marginBottom: 30 }}>
              {`You got ${score} out of ${deck.questions.length} questions correct!`}
            </Text>
            <Button style={{backgroundColor: colors.lightBlue, marginBottom: 10}} onPress={() => {}}>
              <Text style={styles.buttonText}>Try Again!</Text>
            </Button>
            <Button style={{backgroundColor: colors.darkBlue}} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Go Back</Text>
            </Button>
          </View>}
      </View>
    );
  }
};
