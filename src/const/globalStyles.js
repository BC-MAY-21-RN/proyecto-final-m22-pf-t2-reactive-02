import {StyleSheet, Dimensions} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: colors.pink2,
    width: '100%',
    height: '100%',
    marginTop: 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  image: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
  },
  btn: {
    marginVertical: 15,
    backgroundColor: '#9485AC',
    borderRadius: 10,
    height: 50,
    width: 273,
    marginHorizontal: (Dimensions.get('screen').width - 273) / 2,
  },
  textBtn: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
    alignSelf: 'center',
  },
});

export default styles;
