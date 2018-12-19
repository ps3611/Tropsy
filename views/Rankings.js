import React from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchAtpList, fetchEloList } from '../actions/apiActions';
import Navbar from './Navbar';
import Atp from './Atp';
import Elo from './Elo';
import style from '../styles/Rankings';

const loadingGif = require('../assets/loading.gif');


class Rankings extends React.Component {
  componentDidMount() {
    this.props.fetchAtpList(1);
    this.props.fetchEloList(1);
  }

  render() {
    const { selectedRankingsViewIndex, loading, atpPagesLoaded } = this.props;
    const rankingsView = selectedRankingsViewIndex === 0 ? <Atp /> : <Elo />;
    if (loading && atpPagesLoaded === 0) {
      return (
        <View style={style.loadingView}>
          <Image source={loadingGif} />
        </View>
      );
    }
    return (
      <View style={style.rankingsView}>
        <Navbar />
        { rankingsView }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  atpPagesLoaded: state.api.atpPagesLoaded,
  selectedRankingsViewIndex: state.settings.selectedRankingsViewIndex,
  loading: state.rankingsPage.loading,
  errors: state.rankingsPage.errors,
});

const mapDispatchToProps = dispatch => ({
  fetchAtpList: page => dispatch(fetchAtpList(page)),
  fetchEloList: page => dispatch(fetchEloList(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
