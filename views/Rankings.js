import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { fetchPlayerList } from '../actions/apiActions.js';
import Navbar from './Navbar.js';
import AtpView from './AtpView.js';
import EloView from './EloView.js';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */

class Rankings extends React.Component {

  componentDidMount() {
    this.props.fetchPlayerList();
  }

  render() {
    const { selectedRankingsViewIndex } = this.props;
    const rankingsView = selectedRankingsViewIndex === 0 ? <AtpView /> : <EloView />;
    return (
      <View>
        <Navbar />
        { rankingsView }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  selectedRankingsViewIndex: state.settings.selectedRankingsViewIndex,
});

const mapDispatchToProps = dispatch => ({
  fetchPlayerList: () => dispatch(fetchPlayerList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
