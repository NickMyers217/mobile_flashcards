import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import Button from './Button';
import { container, whiteText, input } from '../utils/styles';

const styles = StyleSheet.create({
  container,
  whiteText,
  input
});

export default class NewDeck extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  clearForm = () => {
    this.setState(() => ({
      question: '',
      answer: ''
    }));
  }

  render() {
    const { navigation, onCardAdd } = this.props;
    const { title } = navigation.state.params;

    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder='Question'
          value={this.state.question}
          onChangeText={question => this.setState(state => ({ ...state, question }))} />
        <TextInput style={styles.input}
          placeholder='Answer'
          value={this.state.answer}
          onChangeText={answer => this.setState(state => ({ ...state, answer }))} />
        <Button onPress={() => {
          this.clearForm();
          onCardAdd(title, this.state);
        }}>
          <Text style={[whiteText, {padding: 20}]}>Add Question</Text>
        </Button>
      </View>
    );
  }
};
