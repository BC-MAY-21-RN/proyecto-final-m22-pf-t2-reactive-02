import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 250,
    backgroundColor: '#DAC3DB',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
  },
  image: {
    borderRadius: 90,
    width: 150,
    height: 150,
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
    right: 120,
    top: 120,
    borderRadius: 25,
    padding: 10,
  },
});

export default styles;
