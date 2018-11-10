import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Row extends React.Component {
  render() {
    return (
      <View style={styles.row}>
        <Text>{this.props.currentRank}</Text>
        <Text>{this.props.playerName}</Text>
        <Text>{this.props.playerCountry}</Text>
        <Text>{this.props.playerPoints}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
