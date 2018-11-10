import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Row from './Row.js';
import data from './atp-rankings.json';

// const data = [
//   { name: 'Novak Djokovic', nationality: 'SRB', ranking: 1, age: 31, points: 4000 },
//   { name: 'Novak Djokovic', nationality: 'SRB', ranking: 1, age: 31, points: 4000 },
//   { name: 'Novak Djokovic', nationality: 'SRB', ranking: 1, age: 31, points: 4000 }
// ];

export default class App extends React.Component {
  render() {
    const rows = data.map((el,i) => {
      return <Row
        key={i}
        value={el.fields.player_name}
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
