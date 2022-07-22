import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    height: 51,
    marginHorizontal: 10,
  },
  containerText: {
    width: '60%',
    marginTop: 12,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#263238',
  },
  containerInput: {
    backgroundColor: 'rgba(165, 165, 165, 0.1)',
    height: 50,
    width: '30%',
    borderBottomWidth: 1,
    borderColor: 'rgba(165, 165, 165, 0.6)',
    marginVertical: 6,
    marginHorizontal: 25,
  },
  select: {
    width: '100%',
  },
  selectText: {
    fontSize: 15,
  },
  dropdown: {
    fontSize: 15,
  },
});
export default styles;
