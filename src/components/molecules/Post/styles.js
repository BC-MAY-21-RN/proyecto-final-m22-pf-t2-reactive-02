import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  card: {marginHorizontal: 4},
  contImage: {
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  dot: {
    color: '#888',
    margin: 3,
  },
  dotActive: {
    color: 'white',
    margin: 3,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  locationbutton: {position: 'absolute', right: 16, top: 10},
  text: {
    marginHorizontal: 10,
    marginVertical: 5,
    maxWidth: Dimensions.get('screen').width - 60,
    textAlign: 'justify',
  },
});

export default styles;
