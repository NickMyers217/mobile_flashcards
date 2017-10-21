import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';

import { getDecks, getDeck, saveDeckTitle, addCardToDeck } from './utils/api';

const DeckList = () => (
  <View style={{flex: 1}}>
    <Text>Deck List</Text>
  </View>
);

const NewDeck = () => (
  <View style={{flex: 1}}>
    <Text>New Deck</Text>
  </View>
);

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'green',
    style: {
      height: 56,
      backgroundColor: 'purple'
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'black', height: Constants.statusBarHeight}}>
          <StatusBar translucent backgroundColor={'black'} />
        </View>
        <Tabs />
      </View>
    );
  }
}