import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', backgroundColor: '#fff'},
  imagetext: {alignSelf: 'center', marginTop: 40, marginBottom: 40},
  logocontainer: {marginLeft: 10},
  logoscontainer: {
    width: '100%',
    height: Dimensions.get('screen').height < 775 ? 100 : 150,
  },
  logosdireccion: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  namecontainer: {marginTop: 23},
});

export default styles;
