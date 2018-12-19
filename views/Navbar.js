import React from 'react';
import { View } from 'react-native';
import { Icon, ButtonGroup } from 'react-native-elements';
import style from '../styles/Navbar.js';

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
      <View style={style.navbar}>
        <View style={style.menuView}>
          {
            // <Icon name="menu" />
          }
        </View>
        <View style={style.buttonView}>
          <ButtonGroup
            onPress={this.toggleView}
            selectedIndex={(selectedIndex+1)%2}
            buttons={buttons}
            containerStyle={style.buttonGroup}
          />
        </View>
        <View style={style.infoView}>
          {
            // <Icon name="info-outline" />
          }
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
