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
  image: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
  },
});

export default globalstyles;
