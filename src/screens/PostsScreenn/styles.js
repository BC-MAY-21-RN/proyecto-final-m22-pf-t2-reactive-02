import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../const/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  btn: {
    borderRadius: 60,
    position: 'absolute',
    backgroundColor: 'rgba(92, 92, 92, 0.6)',
    width: 60,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    bottom: 30,
  },
  textBtn: {
    fontSize: 40,
    color: colors.white,
    alignSelf: 'center',
    paddingBottom: 6,
  },
  scroll: {width: Dimensions.get('screen').width},
  notfound: {
    width: '100%',
  },
});

export default styles;
