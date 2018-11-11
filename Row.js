import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */


export default class Row extends React.Component {
  render() {
    const {
      currentRank,
      highestRank,
      rankChange,
      playerImage,
      playerName,
      playerCountry,
      currentTournamentName,
      currentTournamentRound,
      inTournament,
      pointsCurrent,
      pointsChange,
      pointsNext,
      pointsNextProb,
    } = this.props;
    return (
      <View style={[styles.row, inTournament ? styles.active : styles.inactive]}>
        <View id="Image" style={{ flex: 2 }}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: playerImage }}
          />
        </View>
        <View id="Ranking" style={{ flex: 1 }}>
          <Text>{currentRank}</Text>
          <Text>{rankChange}</Text>
          <Text>{highestRank}</Text>
        </View>
        <View style={{ flex: 9, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: 'lightgrey', borderBottomWidth: 0.5 }}>
          <View id="Player" style={{ flex: 3 }}>
            <Text>{playerName}</Text>
            <Text>{playerCountry}</Text>
          </View>
          <View id="Tournament" style={{ flex: 3 }}>
            <Text>{currentTournamentName}</Text>
            <Text>{currentTournamentRound}</Text>
          </View>
          <View id="Points" style={{ flex: 3, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text>{pointsCurrent}</Text>
              <Text>{pointsChange}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text>{pointsNext}</Text>
              <Text>{pointsNextProb}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  active: {
    backgroundColor: '#9CF78F',
  },
  inactive: {
  },
});
