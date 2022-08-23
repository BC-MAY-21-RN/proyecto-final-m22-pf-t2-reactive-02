import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  container: {
    height: 400,
    paddingTop: 30,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: 'white',
  },
  text: {color: colors.white},
  guardar: {
    backgroundColor: '#DB6C9EAA',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: Dimensions.get('screen').width - 250,
    marginTop: 80,
    marginLeft: 90,
    alignItems: 'center',
  },
});

export default styles;
