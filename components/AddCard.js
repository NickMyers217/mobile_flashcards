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

  render() {
    const title = this.props.navigation.state.params.title;

    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder='Question'
          onChangeText={question => this.setState(state => ({ ...state, question }))} />
        <TextInput style={styles.input}
          placeholder='Answer'
          onChangeText={answer => this.setState(state => ({ ...state, answer }))} />
        <Button onPress={() => this.props.addCardToDeck(title, this.state)}>
          <Text style={[whiteText, {padding: 20}]}>Add Question</Text>
        </Button>
      </View>
    );
  }
};
