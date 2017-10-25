import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Button from './Button';
import { container, whiteText, mutedBtnText } from '../utils/styles';

const styles = StyleSheet.create({
  container,
  whiteText,
  mutedBtnText
});

const DeckListTile = ({ title='', questions=[], onPress=() => {} }) => (
  <Button onPress={onPress} style={{height: 75}}>
    <Text style={[styles.whiteText, {padding: 10}]}>{title}</Text>
    <Text style={styles.mutedBtnText}>{`${questions.length} cards`}</Text>
  </Button>
);

export default DeckListTile;
