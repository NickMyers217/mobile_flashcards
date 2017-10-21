import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { getDecks } from '../utils/api';

const Deck = ({ title }) => (
  <View style={{flex: 1}}>
    <Text>{title}</Text>
  </View>
);

export default class DeckList extends React.Component {
  state = {}

  componentDidMount() {
    getDecks()
      .then(decks => {
        this.setState(() => decks);
      });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={Object.keys(this.state).map(key => ({key, data: this.state[key]}))}
          renderItem={({ item }) => <Deck {...item.data} />} />
      </View>
    );
  }
};
