import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */


export default class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text>Tennis Roo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    height: 60,
    backgroundColor: 'yellow',
  },
});
