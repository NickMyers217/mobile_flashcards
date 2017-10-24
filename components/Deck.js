import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  mutedText: {
    color: '#999'
  },
  button: {
    marginBottom: 20,
    width: 160,
    alignItems: 'center',
    backgroundColor: '#32A7F4',
    width: 300
  },
  buttonLight: {
    width: 160,
    alignItems: 'center',
    backgroundColor: '#0074D1',
    width: 300
  },
  buttonText: {
    padding: 10,
    color: 'white'
  }
});

export default class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;
    return {
      title
    };
  }

  render() {
    const { navigation, deck } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 20}}>{deck.title}</Text>
        <Text style={[styles.mutedText, {marginBottom: 40}]}>
          {`${(deck.questions && deck.questions.length) || 0} cards`}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddCard', {title: deck.title})}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonLight}>
            <Text style={styles.buttonText}>Start Quiz</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};
