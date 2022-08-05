import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    borderRadius: 55 / 2,
    width: 55,
    height: 55,
  },
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  info: {
    marginLeft: 20,
    maxWidth: 200,
  },
});

export default styles;
