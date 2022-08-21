import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../const/colors';

const styles = (i, p) =>
  StyleSheet.create({
    container: {
      marginLeft: -16,
      height: i,
      width: Dimensions.get('screen').width - 8,
      backgroundColor: colors.black,
    },
    img: {
      height: 200,
      width: Dimensions.get('screen').width - 8,
      resizeMode: 'cover',
    },
    pager: {flex: 1},
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
