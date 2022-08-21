import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,
  },
  row: {flex: 1, flexDirection: 'row'},
  text: {
    marginLeft: 35,
    fontSize: 15,
    maxWidth: 190,
    textAlign: 'center',
  },
  touchable: {
    width: 20,
    height: 20,
    marginTop: 3,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
