import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  alertContainer: {position: 'absolute', right: 23, top: -25},
  containerInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    width: '100%',
    height: 40,
    marginTop: 20,
  },
  icon: {marginLeft: 6, marginRight: 10},
  iconInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    width: 225,
    marginBottom: -2,
  },
  rectangle: {
    width: Dimensions.get('screen').width - 60,
    height: 30,
    backgroundColor: colors.gray2,
    borderRadius: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAlert: {
    color: colors.red,
    fontSize: 16,
    marginLeft: 26,
  },
  triangle: {
    marginLeft: 10,
    marginTop: -2,
  },
  visible: {position: 'absolute', right: 23, top: 9},
  warning: {
    marginLeft: 19,
  },
});

export default styles;
