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
          inTournament={el.in_tournament}
          pointsCurrent={el.points_current}
          pointsChange={el.points_change}
          pointsNext={el.points_next}
          pointsNextProb={el.points_next_prob}
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
