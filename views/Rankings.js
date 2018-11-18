import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchPlayerList } from '../actions/apiActions.js'
import Navbar from './Navbar.js';
import Row from './Row.js';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */

class Rankings extends React.Component {

  componentDidMount() {
    this.props.fetchPlayerList();
  }

  render() {
    const { data } = this.props;
    const rows = data.map((player, i) => {
      return (
        <Row
          key={i}
          currentRank={player.ranking.tour}
          highestRank={player.ranking.tour_highest}
          rankChange={player.ranking.tour_change}
          playerName={`${player.player_details.first_name} ${player.player_details.last_name}`}
          playerImage={player.player_details.image}
          playerCountry={player.player_details.country}
          currentTournamentName={player.current_tournament.name}
          currentTournamentRound={player.current_tournament.round}
          inTournament={player.current_tournament.in_tournament}
          pointsCurrent={player.points.tour_live}
          pointsChange={player.points.tour_change}
          pointsNext={player.points.tour_next}
          pointsNextProb={player.next_prob}
        />
      );
    });
    return (
      <View>
        <Navbar />
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
  fetchPlayerList: () => dispatch(fetchPlayerList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
