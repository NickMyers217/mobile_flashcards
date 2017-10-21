import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';

import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';

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
