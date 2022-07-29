import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#DAC3DB',
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
  editar: {
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 15,
    alignSelf: 'center',
  },
  containerinfo: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default styles;
