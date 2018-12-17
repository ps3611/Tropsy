import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { fetchPlayerList } from '../actions/apiActions.js';
import Navbar from './Navbar.js';
import PlayerList from './PlayerList.js';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */

class Rankings extends React.Component {

  componentDidMount() {
    this.props.fetchPlayerList(1);
  }

  render() {
    const { selectedRankingsViewIndex } = this.props;
    const sortType = selectedRankingsViewIndex === 0 ? 'points' : 'elo';
    return (
      <View>
        <Navbar />
        <PlayerList
          sortType={sortType}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  selectedRankingsViewIndex: state.settings.selectedRankingsViewIndex,
});

const mapDispatchToProps = dispatch => ({
  fetchPlayerList: page => dispatch(fetchPlayerList(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
