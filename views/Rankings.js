import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchAtpList, fetchEloList } from '../actions/apiActions.js';
import Navbar from './Navbar.js';
import Atp from './Atp.js';
import Elo from './Elo.js';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */

class Rankings extends React.Component {

  componentDidMount() {
    this.props.fetchAtpList(1);
    this.props.fetchEloList(1);
  }

  render() {
    const { selectedRankingsViewIndex, loading } = this.props;
    const rankingsView = selectedRankingsViewIndex === 0 ? <Atp /> : <Elo />;
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Loading...
          </Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Navbar />
        { rankingsView }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  selectedRankingsViewIndex: state.settings.selectedRankingsViewIndex,
  loading: state.rankingsPage.loading,
  errors: state.rankingsPage.errors,
});

const mapDispatchToProps = dispatch => ({
  fetchAtpList: page => dispatch(fetchAtpList(page)),
  fetchEloList: page => dispatch(fetchEloList(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
