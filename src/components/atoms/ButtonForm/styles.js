import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: '#9485AC',
    borderRadius: 10,
    height: 50,
    width: 273,
    marginHorizontal: (Dimensions.get('screen').width - 273) / 2,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
    alignSelf: 'center',
  },
  containerText: {
    width: '60%',
    marginTop: 12,
    justifyContent: 'center',
  },
  text2: {
    fontSize: 15,
    fontWeight: '600',
    color: '#263238',
  },
});

export default styles;
