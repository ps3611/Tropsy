import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchEloList } from '../actions/apiActions';
import Row from './Row';


class Elo extends React.Component {
  componentDidMount() {
    const { maxPages } = this.props;
    this.setState({ page: maxPages });
  }

  keyExtractor = item => `${item.first_name}${item.last_name}elo`;

  renderItem = ({ item, index }) => (
    <Row
      currentRank={index + 1}
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

  handleEnd = () => {
    this.setState(state => ({ page: state.page + 1 }), () => {
      const { page } = this.state;
      this.props.fetchEloList(page);
    });
  }

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
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
