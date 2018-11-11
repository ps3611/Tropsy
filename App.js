import React from 'react';
import { ScrollView } from 'react-native';
import Row from './Row.js';
import data from './data.json';

/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension, react/prop-types */


export default class App extends React.Component {
  render() {
    const rows = data.map((el, i) => {
      return (
        <Row
          key={i}
          currentRank={el.rank_current}
          playerName={el.player_name}
          playerImage={el.player_image}
          playerCountry={el.player_country}
          playerCountryImage={el.player_country_image}
          playerPoints={el.points_current}
        />
      );
    });
    return (
      <ScrollView>
        {rows}
      </ScrollView>
    );
  }
}
