import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '40%',
    backgroundColor: '#DAC3DB',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
  },
  direction: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 200,
  },
  image: {
    borderRadius: 90,
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  name: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
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
