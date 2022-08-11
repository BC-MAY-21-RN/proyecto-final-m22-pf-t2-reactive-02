import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: Dimensions.get('screen').height,
    backgroundColor: '#DAC3DB',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
  },

});

export default styles;
