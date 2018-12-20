import React from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchAtpList, fetchEloList } from '../actions/apiActions';
import Navbar from './Navbar';
import RowList from './RowList';
import style from '../styles/Rankings';

const loadingGif = require('../assets/loading.gif');


class Rankings extends React.Component {
  componentDidMount() {
    this.props.fetchAtpList(1);
    this.props.fetchEloList(1);
  }

  render() {
    const {
      loading,
      selectedRankingsViewIndex,
      atpPagesLoaded,
      atpData,
      eloPagesLoaded,
      eloData,
    } = this.props;
    const type = selectedRankingsViewIndex === 0 ? 'atp' : 'elo';
    const fetchFunction = selectedRankingsViewIndex === 0 ? this.props.fetchAtpList : this.props.fetchEloList;
    const data = selectedRankingsViewIndex === 0 ? atpData : eloData;
    const pagesLoaded = selectedRankingsViewIndex === 0 ? atpPagesLoaded : eloPagesLoaded;
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
        <RowList
          type={type}
          fetchFunction={fetchFunction}
          data={data}
          pagesLoaded={pagesLoaded}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  atpData: state.api.atpList,
  atpPagesLoaded: state.api.atpPagesLoaded,
  eloData: state.api.eloList,
  eloPagesLoaded: state.api.eloPagesLoaded,
  selectedRankingsViewIndex: state.settings.selectedRankingsViewIndex,
  loading: state.rankingsPage.loading,
  errors: state.rankingsPage.errors,
});

const mapDispatchToProps = dispatch => ({
  fetchAtpList: page => dispatch(fetchAtpList(page)),
  fetchEloList: page => dispatch(fetchEloList(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
