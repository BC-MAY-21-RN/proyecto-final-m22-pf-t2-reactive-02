import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../const/colors';

const styles = StyleSheet.create({
  containerList: {
    width: Dimensions.get('screen').width,
    marginBottom: '15%',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  text: {
    fontSize: 17,
    color: colors.gray,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
  },
  bottom: {height: 10},
});

export default styles;
