import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Navbar from './Navbar.js';
import AtpView from './AtpView.js';
import EloView from './EloView.js';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */

class Rankings extends React.Component {
  render() {
    const conditional = true ? <EloView /> : <AtpView />;
    return (
      <View>
        <Navbar />
        { conditional }
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
