import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/Row.js';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types,
react/jsx-one-expression-per-line */


export default class Row extends React.Component {
  render() {
    const {
      currentRank,
      rankChange,
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

    const flagImageUrl = `https://s3.eu-west-2.amazonaws.com/tennisroo/flags/${playerCountry}.png`;

    let rankChangeDisplay;
    if (rankChange > 0) rankChangeDisplay = <Text style={styles.green}>▲{Math.abs(rankChange)}</Text>;
    else if (rankChange < 0) rankChangeDisplay = <Text style={styles.red}>▼{Math.abs(rankChange)}</Text>;
    else rankChangeDisplay = <Text />;

    let pointsChangeDisplay;
    if (pointsChange > 0) pointsChangeDisplay = <Text style={styles.green}>▲{Math.abs(pointsChange)}</Text>;
    else if (pointsChange < 0) pointsChangeDisplay = <Text style={styles.red}>▼{Math.abs(pointsChange)}</Text>;

    let pointsNextProbDisplay;
    if (pointsNextProb) {
      pointsNextProbDisplay = (
        <View style={styles.nextProbView}>
          <Text style={styles.nextProbNumber}>{pointsNextProb}</Text>
          <Text style={styles.nextProbPercent}>%</Text>
        </View>
      );
    }

    return (
      <View style={[styles.row, inTournament ? styles.active : styles.inactive]}>
        <View id="Ranking" style={styles.rankingsView}>
          <Text />
          <Text style={styles.rankingsText}>{currentRank}</Text>
          {rankChangeDisplay}
        </View>
        <View id="Image" style={styles.imageView}>
          <Image
            style={styles.image}
            source={{ uri: flagImageUrl }}
          />
        </View>
        <View style={styles.mainView}>
          <View id="Player" style={styles.playerView}>
            <Text style={styles.playerText}>{playerName}</Text>
            <Text>{playerCountry}</Text>
          </View>
          <View id="Tournament" style={styles.tournamentView}>
            <Text style={styles.tournamentText}>{currentTournamentName}</Text>
            <Text>{currentTournamentRound}</Text>
          </View>
          <View id="Points" style={styles.pointsView}>
            <View style={styles.currentPointsView}>
              <Text>{pointsCurrent}</Text>
              {pointsChangeDisplay}
            </View>
            <View style={styles.nextPointsView}>
              <Text>{pointsNext}</Text>
              {pointsNextProbDisplay}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
