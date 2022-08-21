import {StyleSheet} from 'react-native';
import colors from '../../const/colors';

const styles = StyleSheet.create({
  nameContainer: {marginTop: 100, alignSelf: 'center', marginBottom: 10},
  logoContainer: {alignSelf: 'center'},
  container: {width: '100%', height: '100%'},
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 16,
    color: colors.pink,
  },
  logosContainer: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
