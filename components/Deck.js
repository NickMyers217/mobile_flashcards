import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Button from './Button';
import { container, whiteText, mutedText, colors } from '../utils/styles';

const styles = StyleSheet.create({
  container,
  whiteText,
  mutedText
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
        <Button
          style={{backgroundColor: colors.lightBlue, marginBottom: 10}}
          onPress={() => navigation.navigate('AddCard', {title: deck.title})}>
            <Text style={[styles.whiteText, {padding: 10}]}>Add Card</Text>
        </Button>
        <Button
          style={{backgroundColor: colors.darkBlue}}
          onPress={() => {
            if(deck.questions && deck.questions.length > 0) {
              navigation.navigate('Quiz', {title: deck.title});
            }
          }}>
            <Text style={[styles.whiteText, {padding: 10}]}>Start Quiz</Text>
        </Button>
      </View>
    );
  }
};
