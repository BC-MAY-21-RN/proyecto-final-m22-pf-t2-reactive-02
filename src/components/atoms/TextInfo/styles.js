import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: Dimensions.get('screen').width - 30,
  },
  text1: {
    color: '#784B90',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text2: {fontSize: 18, marginLeft: 10},
  icontext: {flexDirection: 'row'},
});

export default styles;
