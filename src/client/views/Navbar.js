import React from 'react';
import { View } from 'react-native';
import { Icon, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import style from '../styles/Navbar';
import { selectRankingsViewIndex } from '../actions/settingsAction';

const buttons = ['ATP', 'ELO'];


class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }

  toggleView = (selectedIndex) => {
    this.props.onSelect(selectedIndex);
    this.setState({ selectedIndex });
  }

  render() {
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
            selectedIndex={(selectedIndex + 1) % 2}
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
});

const mapDispatchToProps = dispatch => ({
  onSelect: index => dispatch(selectRankingsViewIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
