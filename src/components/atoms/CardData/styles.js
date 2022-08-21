import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderTopWidth: 0.4,
    width: 120,
    height: 43,
    marginBottom: 2,
  },
  iconPosition: {flexDirection: 'row'},
  icon: {
    marginLeft: 130,
  },
  tooltip: {
    marginLeft: '10%',
    marginTop: '4%',
  },
  btn: {
    backgroundColor: 'white',
    borderTopWidth: 0.4,
    width: 120,
    height: 43,
    marginBottom: 2,
    justifyContent: 'center',
  },
  textBtn: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: '800',
    alignSelf: 'center',
  },
  tooltipcontainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default styles;
