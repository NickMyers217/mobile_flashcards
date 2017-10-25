import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import Button from './Button';
import { container, input, whiteText } from '../utils/styles';

const styles = StyleSheet.create({
  container,
  input,
  whiteText
});

export default class NewDeck extends React.Component {
  state = {
    text: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 30, fontSize: 30}}>What is the title of your new deck?</Text>
        <TextInput style={styles.input}
          placeholder='Deck title'
          onChangeText={(text) => this.setState(() => ({ text }))} />
        <Button
          onPress={() => this.props.addNewDeck(this.state.text)}>
            <Text style={[styles.whiteText, {padding: 20}]}>Add Deck</Text>
        </Button>
      </View>
    );
  }
};
