import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Row extends React.Component {
  render() {
    return (
      <View style={styles.row}>
        <View style={{flex:1}}>
          <Text>{this.props.currentRank}</Text>
        </View>
        <View style={{flex:3}}>
          <Text>{this.props.playerName}</Text>
        </View>
        <View style={{flex:2}}>
          <Text>{this.props.playerCountry}</Text>
        </View>
        <View style={{flex:1}}>
          <Text>{this.props.playerPoints}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
