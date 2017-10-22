import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Constants } from 'expo';

import DeckListContainer from '../containers/DeckList';
import NewDeckContainer from '../containers/NewDeck';
import Deck from './Deck';

const Tabs = TabNavigator({
  Decks: {
    screen: DeckListContainer,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeckContainer,
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

const Routes = StackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'blue'
      }
    }
  }
}, {
  initialRouteName: 'Tabs'
});

export default class Home extends React.Component {
  componentDidMount() {
    console.log('Loading decks into redux from AsyncStorage!')
    this.props.loadDecksFromStorage()
      .then(() => console.log('Decks loaded!'));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'black', height: Constants.statusBarHeight}}>
          <StatusBar translucent backgroundColor={'black'} />
        </View>
        <Routes />
      </View>
    );
  }
};
