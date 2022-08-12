import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '60%',
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,
  },

  guardar: {
    backgroundColor: '#C4C4C4',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: Dimensions.get('screen').width - 250,
    marginTop: 80,
    marginLeft: 90,
    alignItems: 'center',
  },
});

export default styles;
