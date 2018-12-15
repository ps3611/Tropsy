import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchPlayerList } from '../actions/apiActions.js';
import Row from './Row.js';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */

class AtpView extends React.Component {

  sortFunction = (player1, player2) => {
    return player2[this.props.sortType] - player1[this.props.sortType];
  }

  render() {
    const { data } = this.props;
    const rows = data.sort(this.sortFunction).map((player, i) => {
      return (
        <Row
          key={i}
          currentRank={player.ranking_tour}
          highestRank={player.ranking_tour_highest}
          rankChange={player.ranking_tour_change}
          playerName={`${player.first_name} ${player.last_name}`}
          playerImage={player.image_url}
          playerCountry={player.country}
          currentTournamentName={player.current_tournament_name}
          currentTournamentRound={player.current_tournament_round}
          inTournament={player.in_tournament}
          pointsCurrent={player.points_tour_live}
          pointsChange={player.points_tour_change}
          pointsNext={player.points_tour_next}
          pointsNextProb={player.next_prob}
        />
      );
    });
    return (
      <View>
        <ScrollView>
          {rows}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.api.playerList,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AtpView);
