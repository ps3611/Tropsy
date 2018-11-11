import React from 'react';
import { ScrollView } from 'react-native';
import Row from './Row.js';
import data from './data.json';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */


export default class App extends React.Component {
  render() {
    const rows = data.map((el, i) => {
      return (
        <Row
          key={i}
          currentRank={el.rank_current}
          highestRank={el.rank_highest}
          rankChange={el.rank_change}
          playerName={el.player_name}
          playerImage={el.player_image}
          playerCountry={el.player_country}
          currentTournamentName={el.current_tournament_name}
          currentTournamentRound={el.current_tournament_round}
          pointsCurrent={el.points_current}
          pointsChange={el.points_change}
          pointsNext={el.points_next}
          pointsNextProb={el.points_next_prob}
        />
      );
    });
    return (
      <ScrollView>
        {rows}
      </ScrollView>
    );
  }
}
