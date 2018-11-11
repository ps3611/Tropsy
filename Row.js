import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */


export default class Row extends React.Component {
  render() {
    const {
      currentRank,
      playerImage,
      playerCountryImage,
      playerName,
      playerCountry,
      playerPoints,
    } = this.props;
    return (
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text>{currentRank}</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: playerImage }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: playerCountryImage }}
          />
        </View>
        <View style={{ flex: 3 }}>
          <Text>{playerName}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>{playerCountry}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>{playerPoints}</Text>
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
    paddingTop: 20,
    paddingBottom: 20,
  },
});
