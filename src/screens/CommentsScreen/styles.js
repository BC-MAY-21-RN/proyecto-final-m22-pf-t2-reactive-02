import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  containerList: {
    width: Dimensions.get('screen').width,
    marginBottom: '15%',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default styles;
