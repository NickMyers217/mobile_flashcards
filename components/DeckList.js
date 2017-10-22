import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { getDecks } from '../utils/api';

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

const DeckTile = ({ title, questions=[], onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.container, styles.deckTile]}>
      <Text style={styles.deckTileText}>{title}</Text>
      <Text style={{color: '#bbb'}}>
        {`${questions.length} cards`}
      </Text>
    </View>
  </TouchableOpacity>
);

const DeckList = ({ decks=[], navigation }) => (
  <View style={styles.container}>
    {decks.length > 0 &&
      <FlatList
        data={decks.map(deck => ({ key: deck.title, data: deck }))}
        renderItem={({ item }) =>
          <DeckTile {...item.data}
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
