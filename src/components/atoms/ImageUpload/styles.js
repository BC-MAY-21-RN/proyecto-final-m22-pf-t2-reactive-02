import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = value =>
  StyleSheet.create({
    button: {
      marginHorizontal: 20,
    },
    container: {
      flexDirection: 'row',
      marginTop: 30,
    },
    imagecontainer: {marginRight: 10},
    imageViewer: {backgroundColor: colors.blackopacity},
    scrollimage: {
      flexDirection: 'row',
      marginBottom: value,
      marginTop: 10,
      marginLeft: 20,
    },
  });

export default styles;
