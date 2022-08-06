import {StyleSheet, Dimensions} from 'react-native';

const styles = (i, p) =>
  StyleSheet.create({
    container: {
      marginLeft: -16,
      height: 200,
      width: Dimensions.get('screen').width - 8,
      backgroundColor: '#000',
    },
    pager: {flex: 1},
    img: {
      height: 200,
      width: Dimensions.get('screen').width - 8,
      resizeMode: 'cover',
    },
    pagination: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
    },
    point: {
      color: i === p ? 'white' : '#888',
      margin: 3,
    },
  });

export default styles;
