import { MediaQueryStyleSheet } from 'react-native-responsive';

module.exports = MediaQueryStyleSheet.create(
  {
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 50,
    },
    active: {
      backgroundColor: '#9CF78F',
    },
    inactive: {
    },
    green: {
      color: 'green',
      fontSize: 10,
    },
    red: {
      color: 'red',
      fontSize: 10,
    },
    nextProbView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    nextProbNumber: {
      fontSize: 13,
      fontStyle: 'italic',
    },
    nextProbPercent: {
      fontSize: 10,
    },
    rankingsView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rankingsText: {
      fontSize: 16,
    },
    imageView: {
      flex: 1,
      padding: 8,
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain',
    },
    mainView: {
      flex: 9,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: 'lightgrey',
      borderBottomWidth: 0.5,
    },
    playerView: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    playerText: {
      textAlign: 'center',
    },
    tournamentView: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tournamentText: {
      textAlign: 'center',
    },
    pointsView: {
      flex: 3,
      flexDirection: 'row',
    },
    currentPointsView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    nextPointsView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
);
