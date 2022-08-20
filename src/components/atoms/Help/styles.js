import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 400,
  },
  title: {
    color: colors.pink,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    maxWidth: 240,
    marginLeft: 10,
  },
  text2: {
    alignSelf: 'center',
    marginVertical: 5,
  },
});

export default styles;
