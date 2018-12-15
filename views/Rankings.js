import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Navbar from './Navbar.js';
import AtpView from './AtpView.js';
import EloView from './EloView.js';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */

class Rankings extends React.Component {
  render() {
    const { selectedRankingsView } = this.props;
    const rankingsView = selectedRankingsView === 'ATP' ? <AtpView /> : <EloView />;
    return (
      <View>
        <Navbar />
        { rankingsView }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  selectedRankingsView: state.settings.selectedRankingsView,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
