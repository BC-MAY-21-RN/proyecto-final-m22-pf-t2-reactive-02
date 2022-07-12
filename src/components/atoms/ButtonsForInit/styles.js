import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  button1: {
    width: Dimensions.get('screen').width - 84,
    height: 45,
    backgroundColor: '#DB6C9E',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 42,
    marginTop: 15,
  },
  button2: {
    width:
      Dimensions.get('screen').width <= 360
        ? Dimensions.get('screen').width - 120
        : Dimensions.get('screen').width - 158,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#DB6C9E',
    borderRadius: 8,
    marginLeft: Dimensions.get('screen').width <= 360 ? 60 : 79,
    marginTop: 20,
    justifyContent: 'center',
  },
  text1: {
    color: '#fff',
    fontSize: 16,
  },
  text2: {
    color: '#DB6C9E',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 35,
  },
  google: {
    position: 'absolute',
    right: 35,
  },
});

export default styles;
