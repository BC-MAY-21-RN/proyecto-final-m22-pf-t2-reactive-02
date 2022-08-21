import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../const/colors';

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', backgroundColor: '#fff'},
  imagetext: {alignSelf: 'center', marginTop: 40, marginBottom: 40},
  logoContainer: {marginLeft: 10},
  logosContainer: {
    width: '100%',
    height: Dimensions.get('screen').height < 775 ? 100 : 150,
  },
  logosDireccion: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  nameContainer: {marginTop: 23},
  btn: {
    width: Dimensions.get('screen').width - 80,
    marginLeft: 40,
    backgroundColor: colors.pink,
    height: 50,
    marginTop: 40,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textBtn: {
    fontSize: 16,
    color: colors.white,
    alignSelf: 'center',
  },
});

export default styles;
