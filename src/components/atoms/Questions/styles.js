import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 65,
    marginHorizontal: 20,
    paddingVertical: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '40%',
    backgroundColor: 'rgba(165, 165, 165, 0.1)',
    borderColor: 'rgba(165, 165, 165, 0.6)',
    borderBottomWidth: 1,
  },
  text: {
    maxWidth: '60%',
    width: '60%',
    color: colors.black,
  },
  selectText: {
    fontSize: 15,
  },
  dropdown: {
    fontSize: 15,
  },
});

export default styles;
