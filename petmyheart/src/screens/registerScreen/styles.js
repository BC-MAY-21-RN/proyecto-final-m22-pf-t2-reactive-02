import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  namecontainer: {alignSelf: 'center', marginBottom: 30, marginTop: 20},
  logocontainer: {alignSelf: 'center'},
  container: {width: '100%', height: '100%'},
  formcontainer: {
    backgroundColor: '#DAC3DB',
    width: '100%',
    height: Dimensions.get('screen').height,
    marginTop: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 16,
    color: '#DB6C9E',
  },
});

export default styles;
