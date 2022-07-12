import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  containerInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#7B7B7B',
    width: '100%',
    height: 40,
    marginTop: 20,
  },
  iconInput: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  input: {
    fontSize: 16,
    fontWeight: '400',
    width: 225,
    marginBottom: -2,
  },
  icon: {marginLeft: 76, marginRight: 10},
  visible: {position: 'absolute', right: 23, top: 9},
  triangulo: {marginLeft: 10, marginTop: -2},
  warning: {marginLeft: 19},
  alertContainer: {position: 'absolute', left: 30, bottom: 15},
  rectangulo: {
    width: Dimensions.get('screen').width - 60,
    height: 30,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
  },
  row: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  textAlert: {color: '#D1554D', fontSize: 16, marginLeft: 26},
});

export default styles;
