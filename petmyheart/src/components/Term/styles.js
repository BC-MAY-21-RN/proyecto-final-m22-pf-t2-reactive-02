import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 40,
    alignSelf: 'center',
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
    marginLeft: 15,
    fontSize: 16,
    maxWidth: 200,
    textAlign: 'center',
  },
  row: {flex: 1, flexDirection: 'row'},
});

export default styles;
