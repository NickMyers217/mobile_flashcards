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
  text: {
    marginBottom: 30,
    fontSize: 30
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
    text: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput style={styles.input}
          placeholder='Deck title'
          onChangeText={(text) => this.setState(() => ({ text }))} />
        <TouchableOpacity onPress={() => this.props.addNewDeck(this.state.text)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Deck</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};
