import React from 'react';
import { TabNavigator } from 'react-navigation';

import DeckList from './DeckList';
import NewDeck from './NewDeck';

const Home = TabNavigator({
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
    activeTintColor: 'yellow',
    style: {
      height: 56,
      backgroundColor: 'blue'
    }
  }
});

export default Home;