import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    marginLeft: 10,
  },
  logosDireccion: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logosContainer: {
    width: '100%',
    height: Dimensions.get('screen').height < 775 ? 100 : 150,
  },
  nameContainer: {marginTop: 23},
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 16,
    color: colors.pink,
  },
});

export default styles;
