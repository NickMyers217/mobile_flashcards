import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

import { getDecks, getDeck, saveDeckTitle, addCardToDeck } from './utils/api';

export default class App extends React.Component {
  state = {}

  componentDidMount() {
    getDecks()
      .then((state) => {
        console.log('state =>', state);
        this.setState(() => state);
      })
      .catch(console.error);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state, null, 2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
