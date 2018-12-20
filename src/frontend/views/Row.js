import React from 'react';
import { Text, View, Image } from 'react-native';
import style from '../styles/Row';


export default function Row(props) {
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
  } = props;

  const flagImageUrl = `https://s3.eu-west-2.amazonaws.com/tennisroo/flags/${playerCountry}.png`;

  let rankChangeDisplay;
  if (rankChange > 0) rankChangeDisplay = <Text style={style.green}>▲{Math.abs(rankChange)}</Text>;
  else if (rankChange < 0) rankChangeDisplay = <Text style={style.red}>▼{Math.abs(rankChange)}</Text>;
  else rankChangeDisplay = <Text />;

  let pointsChangeDisplay;
  if (pointsChange > 0) pointsChangeDisplay = <Text style={style.green}>▲{Math.abs(pointsChange)}</Text>;
  else if (pointsChange < 0) pointsChangeDisplay = <Text style={style.red}>▼{Math.abs(pointsChange)}</Text>;

  let pointsNextProbDisplay;
  if (pointsNextProb) {
    pointsNextProbDisplay = (
      <View style={style.nextProbView}>
        <Text style={style.nextProbNumber}>{pointsNextProb}</Text>
        <Text style={style.nextProbPercent}>%</Text>
      </View>
    );
  }

  return (
    <View style={[style.row, inTournament ? style.active : style.inactive]}>
      <View id="Ranking" style={style.rankingsView}>
        <Text />
        <Text style={style.rankingsText}>{currentRank}</Text>
        {rankChangeDisplay}
      </View>
      <View id="Image" style={style.imageView}>
        <Image
          style={style.image}
          source={{ uri: flagImageUrl }}
        />
      </View>
      <View style={style.mainView}>
        <View id="Player" style={style.playerView}>
          <Text style={style.playerText}>{playerName}</Text>
          <Text>{playerCountry}</Text>
        </View>
        <View id="Tournament" style={style.tournamentView}>
          <Text style={style.tournamentText}>{currentTournamentName}</Text>
          <Text>{currentTournamentRound}</Text>
        </View>
        <View id="Points" style={style.pointsView}>
          <View style={style.currentPointsView}>
            <Text>{pointsCurrent}</Text>
            {pointsChangeDisplay}
          </View>
          <View style={style.nextPointsView}>
            <Text>{pointsNext}</Text>
            {pointsNextProbDisplay}
          </View>
        </View>
      </View>
    </View>
  );
}
