import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '95%',
    alignSelf: 'center',
    marginTop: 7,
    padding: 10,
    borderRadius: 6,
  },
  info: {
    backgroundColor: '#E1E1E1',
    width: '85%',
    height: '80%',
    elevation: 50,
    alignSelf: 'center',
    top: '10%',
    padding: 20,
    borderRadius: 20,
  },
  close: {
    position: 'absolute',
    backgroundColor: '#7B9CB2',
    bottom: 10,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  flatlist: {
    marginBottom: 70,
  },
  text: {fontSize: 16, alignSelf: 'center'},
});

export default styles;
