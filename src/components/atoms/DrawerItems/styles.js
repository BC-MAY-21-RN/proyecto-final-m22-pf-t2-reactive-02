import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, height: '100%'},
  header: {
    backgroundColor: colors.pink3,
    height: 180,
    width: '100%',
  },
  close: {position: 'absolute', right: 15, top: 15},
  img: {
    borderRadius: 55 / 2,
    width: 55,
    height: 55,
    marginTop: 60,
  },
  name: {
    fontSize: 16,
    color: colors.white,
    maxWidth: 160,
    marginTop: 60,
    marginLeft: 4,
  },
  userInfo: {
    marginTop: 30,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  scrollView: {
    marginTop: -3,
  },
  btn: {
    height: 80,
    justifyContent: 'center',
    borderColor: colors.gray2,
    borderWidth: 1,
  },
  textBtn: {
    fontSize: 16,
    marginLeft: 50,
  },
  iconPosition: {position: 'absolute', left: 12},
  email: {color: colors.white, maxWidth: 200, fontSize: 12, marginLeft: 4},
  textContainer: {marginLeft: 5},
});

export default styles;
