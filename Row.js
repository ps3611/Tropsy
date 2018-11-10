import React from 'react';
import { Text, View } from 'react-native';

export default class Row extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.value}</Text>
      </View>
    );
  }
}
