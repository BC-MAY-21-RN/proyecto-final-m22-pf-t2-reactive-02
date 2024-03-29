import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  btn: {position: 'absolute', left: 15, top: 30},
  containerImage: {
    height: 200,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 25,
  },
  image: {
    height: 199,
    width: Dimensions.get('screen').width - 20,
  },
});

export default styles;
