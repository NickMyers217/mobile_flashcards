import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
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

const DeckListTile = ({ title='', questions=[], onPress=() => {} }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.container, styles.deckTile]}>
      <Text style={styles.deckTileText}>{title}</Text>
      <Text style={{color: '#bbb'}}>
        {`${questions.length} cards`}
      </Text>
    </View>
  </TouchableOpacity>
);

export default DeckListTile;
