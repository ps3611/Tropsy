import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, ButtonGroup } from 'react-native-elements';


/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */


export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { selectedIndex: 2 };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    //https://react-native-training.github.io/react-native-elements/docs/button_group.html
    const buttons = ['ATP', 'ELO'];
    const { selectedIndex } = this.state;
    return (
      <View style={styles.navbar}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="menu" />
        </View>
        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
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

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    paddingTop: 20,
    height: 60,
    backgroundColor: '#F7F7F7',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
  },
});
