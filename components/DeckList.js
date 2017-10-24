import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { getDecks } from '../utils/api';
import DeckListTile from './DeckListTile';

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
  icon: {
    color: '#999'
  },
  deckTile: {
    marginBottom: 2,
    width: 160,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    width: 300
  },
  deckTileText: {
    padding: 10,
    color: 'white'
  }
});

const DeckList = ({ decks=[], navigation }) => (
  <View style={styles.container}>
    {decks.length > 0 &&
      <FlatList
        data={decks.map(deck => ({ key: deck.title, data: deck }))}
        renderItem={({ item }) =>
          <DeckListTile
            {...item.data}
            onPress={() => navigation.navigate('Deck', item.data)} />}
      />}
    {decks.length === 0 &&
      <View style={styles.container}>
        <FontAwesome name='frown-o' size={40} style={[styles.icon, { fontSize: 50 }]} />
        <Text style={[styles.mutedText, { fontSize: 20 }]}>There are no decks here yet!</Text>
      </View>}
  </View>
);

export default DeckList;
