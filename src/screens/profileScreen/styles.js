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
  background: {
    backgroundColor: '#DAC3DB',
  },
  header: {
    padding: 30,
  },
  container: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
  },
  title: {
    color: '#784B90',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  changeImage: {
    backgroundColor: '#F1F1F1',
    position: 'absolute',
    right: 110,
    top: 160,
    borderRadius: 20,
    padding: 5,
  },
  editar: {
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 15,
    alignSelf: 'center',
  },
});

export default styles;
