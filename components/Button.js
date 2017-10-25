import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { container, deckTile } from '../utils/styles';

const styles = StyleSheet.create({
  deckTile
});

const Button = ({ children, onPress=() => {}, style={} }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.deckTile, style]}>
      {children}
    </View>
  </TouchableOpacity>
);

export default Button;
