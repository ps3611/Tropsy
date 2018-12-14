import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchPlayerList } from '../actions/apiActions.js'
import Navbar from './Navbar.js';
import Row from './Row.js';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */

class EloView extends React.Component {

  componentDidMount() {
    this.props.fetchPlayerList();
  }

  render() {
    return (
      <View>
        <Text>
          Elo view
        </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(EloView);
