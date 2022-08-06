import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  contImage: {
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 10,
    marginVertical: 5,
    maxWidth: Dimensions.get('screen').width - 60,
    textAlign: 'justify',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    margin: 3,
  },
  dotActive: {
    color: 'white',
    margin: 3,
  },
});

export default styles;
