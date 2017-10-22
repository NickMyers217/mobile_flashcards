import React from 'react';
import { View, Text } from 'react-native';

export default class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;
    return {
      title
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{this.props.navigation.state.params.title}</Text>
      </View>
    );
  }
};
