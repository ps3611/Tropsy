import React from 'react';
import { FlatList } from 'react-native';
import Row from './Row';


export default class RowList extends React.Component {
  componentDidMount() {
    this.setState({
      atpPages: this.props.pagesLoaded,
      eloPages: 1,
    });
  }

  keyExtractor = item => `${item.first_name}${item.last_name}`;

  renderItem = ({ item, index }) => {
    let { type } = this.props;
    if (type === 'atp') type = 'points';
    return (
      <Row
        currentRank={index + 1}
        rankChange={item.ranking_tour_change}
        playerName={`${item.first_name} ${item.last_name}`}
        playerImage={item.image_url}
        playerCountry={item.country}
        currentTournamentName={item.current_tournament_name}
        currentTournamentRound={item.current_tournament_round}
        inTournament={item.in_tournament}
        pointsCurrent={item[`${type}_tour_live`]}
        pointsChange={item.points_tour_change}
        pointsNext={item[`${type}_tour_next`]}
        pointsNextProb={item.next_prob}
      />
    );
  }

  handleEnd = () => {
    if (this.props.type === 'atp') {
      this.setState(state => ({ atpPages: state.atpPages + 1 }), () => {
        this.props.fetchFunction(this.state.atpPages);
      });
    } else {
      this.setState(state => ({ eloPages: state.eloPages + 1 }), () => {
        this.props.fetchFunction(this.state.eloPages);
      });
    }
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        initialNumToRender={20}
        onEndReached={this.handleEnd}
        onEndReachedThreshold={0.5}
      />
    );
  }
}
