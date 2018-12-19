import { MediaQueryStyleSheet } from 'react-native-responsive';

const IPHONE_X = '@media (min-device-width: 375px) and (min-device-height: 812px)';
module.exports = MediaQueryStyleSheet.create(
  {
    navbar: {
      flexDirection: 'row',
      paddingTop: 20,
      height: 80,
      backgroundColor: '#F7F7F7',
      borderBottomColor: 'lightgrey',
      borderBottomWidth: 0.5,
    },
    menuView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonView: {
      flex: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonGroup: {
      margin: 15,
      backgroundColor: '#9CF78F',
      borderRadius: 10,
    },
  },
  {
    [IPHONE_X]: {
      navbar: {
        paddingTop: 30,
        height: 100,
      },
    },
  },
);
