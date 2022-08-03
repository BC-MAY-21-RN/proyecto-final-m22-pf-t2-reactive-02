import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  containerImage: {
    height: 200,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 25,
  },
  btn: {position: 'absolute', left: 15, top: 30},
});

export default styles;
