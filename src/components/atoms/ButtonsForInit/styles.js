import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  button1: {
    width: Dimensions.get('screen').width - 84,
    height: 45,
    backgroundColor: colors.pink,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 42,
    marginTop: 15,
  },
  button2: {
    width:
      Dimensions.get('screen').width <= 360
        ? Dimensions.get('screen').width - 120
        : Dimensions.get('screen').width - 158,
    height: 50,
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.pink,
    borderRadius: 8,
    marginLeft: Dimensions.get('screen').width <= 360 ? 60 : 79,
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  google: {
    marginLeft: 5,
  },
  text1: {
    color: colors.white,
    fontSize: 16,
  },
  text2: {
    color: colors.pink,
    fontSize: 20,
    fontWeight: '600',
  },
});

export default styles;
