import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, ButtonGroup } from 'react-native-elements';

import { connect } from 'react-redux';
import { selectRankingsViewIndex } from '../actions/settingsAction.js';

const buttons = ['ATP','ELO'];
/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */


class Navbar extends React.Component {

  constructor () {
    super();
    this.state = {
      selectedIndex: 0,
    }
  }

  toggleView = (selectedIndex) => {
    this.props.onSelect(selectedIndex);
    this.setState({selectedIndex})
  }

  render() {
    const { selectedRankingsViewIndex } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View style={styles.navbar}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="menu" />
        </View>
        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
          <ButtonGroup
            onPress={this.toggleView}
            selectedIndex={(selectedIndex+1)%2}
            buttons={buttons}
            containerStyle={{ margin: 15, backgroundColor: '#9CF78F', borderRadius: 10 }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="info-outline" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  selectedRankingsViewIndex: state.settings.selectedRankingsViewIndex,
});

const mapDispatchToProps = dispatch => ({
  onSelect: index => dispatch(selectRankingsViewIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 110,
    backgroundColor: '#F7F7F7',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
  },
});
