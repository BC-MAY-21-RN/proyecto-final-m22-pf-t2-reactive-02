import {StyleSheet, Dimensions} from 'react-native';

const globalstyles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#DAC3DB',
    width: '100%',
    height: Dimensions.get('screen').height,
    marginTop: 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default globalstyles;
