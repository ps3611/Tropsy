import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Row from './Row.js';
import data from './atp-rankings.json';

export default class App extends React.Component {
  render() {
    const rows = data.map((el,i) => {
      return <Row
        key={i}
        currentRank={el.fields.current_rank}
        playerName={el.fields.player_name}
        playerCountry={el.fields.player_country}
        playerPoints={el.fields.player_points}
        />
    })
    return (
        <ScrollView>
        {rows}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
