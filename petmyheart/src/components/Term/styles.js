import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,
  },
  touchable: {
    width: 20,
    height: 20,
    marginTop: 3,
    borderColor: '#7B7B7B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 35,
    fontSize: 15,
    maxWidth: 190,
    textAlign: 'center',
  },
  row: {flex: 1, flexDirection: 'row'},
});

export default styles;
