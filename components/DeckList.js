import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import DeckListTile from './DeckListTile';
import { getDecks } from '../utils/api';
import { container, mutedText, colors } from '../utils/styles';

const styles = StyleSheet.create({
  container,
  mutedText
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
        <FontAwesome name='frown-o' size={40} style={{ color: colors.darkGray, fontSize: 50 }} />
        <Text style={{ color: colors.darkGray, fontSize: 20 }}>There are no decks here yet!</Text>
      </View>}
  </View>
);

export default DeckList;
