import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchEloList } from '../actions/apiActions.js';
import Row from './Row.js';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */

class Elo extends React.Component {

  componentDidMount() {
    this.setState({ page: this.props.maxPages });
  }

  _keyExtractor = (item, index) => item.first_name + item.last_name + 'elo';

  _renderItem = ({item, index}) => {
    return (
      <Row
        currentRank={index+1}
        rankChange={item.ranking_tour_change}
        playerName={`${item.first_name} ${item.last_name}`}
        playerImage={item.image_url}
        playerCountry={item.country}
        currentTournamentName={item.current_tournament_name}
        currentTournamentRound={item.current_tournament_round}
        inTournament={item.in_tournament}
        pointsCurrent={item.elo_tour_live}
        pointsChange={item.points_tour_change}
        pointsNext={item.elo_tour_next}
        pointsNextProb={item.next_prob}
      />
    );
  }

  handleEnd = () => {
    this.setState(state => ({ page: state.page+1 }), () => {
      this.props.fetchEloList(this.state.page);
    })
  }

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        initialNumToRender={20}
        onEndReached={this.handleEnd}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const mapStateToProps = state => ({
  data: state.api.eloList,
  maxPages: state.api.eloPagesLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchEloList: page => dispatch(fetchEloList(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Elo);
