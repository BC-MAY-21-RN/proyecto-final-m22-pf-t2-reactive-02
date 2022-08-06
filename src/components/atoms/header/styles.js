import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#D3A6BA',
  },
  containerIcon: {
    width: 30,
    height: 30,
    marginVertical: 15,
    marginLeft: 70,
  },
  icon: {
    marginHorizontal: 15,
    marginTop: 19,
  },
  iconOption: {
    transform: [{rotate: '90deg'}],
  },
  overlay: {
    backgroundColor: '#D3A6BA',
    width: '100%',
    height: '75%',
    marginTop: '65%',
    alignItems: 'center',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#263238',
  },
});
export default styles;
