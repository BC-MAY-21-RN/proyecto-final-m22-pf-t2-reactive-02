import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    borderRadius: 90,
    width: 180,
    height: 180,
    alignSelf: 'center',
  },
  name: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  header: {
    padding: 30,
  },
  changeImage: {
    backgroundColor: '#F1F1F1',
    position: 'absolute',
    right: 110,
    top: 160,
    borderRadius: 25,
    padding: 10,
  },
});

export default styles;
