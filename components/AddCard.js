import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  input: {
    marginBottom: 30,
    height: 40,
    width: 200,
    padding: 5
  },
  button: {
    marginBottom: 30,
    width: 160,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
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
        <TouchableOpacity onPress={() => this.props.addCardToDeck(title, this.state)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Question</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};
