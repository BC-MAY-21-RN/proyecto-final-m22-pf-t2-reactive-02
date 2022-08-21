import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  textInput: {
    backgroundColor: 'rgba(165, 165, 165, 0.1)',
    marginTop: 25,
    marginHorizontal: 10,
    textAlignVertical: 'top',
    borderBottomWidth: 2,
    borderColor: 'rgba(165, 165, 165, 0.6)',
    height: 250,
  },
  input: {
    marginHorizontal: 10,
    backgroundColor: 'rgba(165, 165, 165, 0.1)',
    marginTop: 15,
    fontSize: 15,
    fontWeight: '600',
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.gray2,
  },
});

export default styles;
