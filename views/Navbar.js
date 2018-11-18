import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';


/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */


export default class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="menu" />
        </View>
        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Tennis Roo</Text>
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
