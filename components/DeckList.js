import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
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
  }
});

const Deck = ({ title, questions=[] }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
    <Text style={styles.mutedText}>
      {`${questions.length} cards`}
    </Text>
  </View>
);

const DeckList = ({ decks=[] }) => (
  <View style={styles.container}>
    {decks.length > 0 &&
      <FlatList
        data={decks.map(deck => ({ key: deck.title, data: deck }))}
        renderItem={({ item }) => <Deck {...item.data} />} />}
    {decks.length === 0 &&
      <View style={styles.container}>
        <FontAwesome name='frown-o' size={40} style={[styles.icon, {fontSize: 50}]} />
        <Text style={[styles.mutedText, {fontSize: 20}]}>There are no decks here yet!</Text>
      </View>}
  </View>
);

export default DeckList;
