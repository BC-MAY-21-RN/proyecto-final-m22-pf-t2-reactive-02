import {StyleSheet, Dimensions} from 'react-native';

const styles = (bool, value) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 10,
    },
    buttons: {
      margin: 10,
      marginRight: bool ? Dimensions.get('screen').width - 200 : 0,
    },
    separation: {
      marginRight: 15,
    },
  });

export default styles;
