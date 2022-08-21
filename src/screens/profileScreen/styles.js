import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: '#DAC3DB'},
  topInfo: {height: 230, justifyContent: 'center'},
  img: {
    borderRadius: 90,
    width: 170,
    height: 170,
    alignSelf: 'center',
    marginTop: 20,
  },
  name: {
    maxWidth: 300,
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  icon: {position: 'absolute', top: 20, left: 20},
});

export default styles;
