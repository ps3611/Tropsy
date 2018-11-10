import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Row from './Row.js';

const data = [
  4,
  3,
  2,
  4,
  2,
  5,
  2,
  53,
  2,
  5,
];

export default class App extends React.Component {
  render() {
    const rows = data.map((el,i) => {
      return <Row
        key={i}
        value={el}
        />
    })
    return (
      <View style={styles.container}>
        {rows}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
