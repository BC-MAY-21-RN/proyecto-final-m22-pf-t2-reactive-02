import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('screen').width - 84,
    height: 45,
    backgroundColor: '#DB6C9E',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 42,
    marginTop: 40,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
