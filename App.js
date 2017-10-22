import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';

import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'black', height: Constants.statusBarHeight}}>
          <StatusBar translucent backgroundColor={'black'} />
        </View>
        <Home />
      </View>
    );
  }
}
