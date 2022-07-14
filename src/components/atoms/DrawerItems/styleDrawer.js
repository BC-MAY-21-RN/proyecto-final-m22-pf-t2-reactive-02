import {StyleSheet} from 'react-native';

const styleDrawer = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    backgroundColor: '#D3A6BA',
    height: 180,
    width: '100%',
  },
  textButtons: {
    fontSize: 16,
    fontFamily: 'Arial',
    color: '#263238',
  },
  headerItem: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 50,
    marginHorizontal: 25,
  },
  image: {
    borderRadius: 55 / 2,
    width: 55,
    height: 55,
  },
  dataProfile: {
    paddingTop: 5,
    paddingLeft: 10,
  },
  textName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  textEmail: {
    fontSize: 15,
    color: 'white',
  },
  iconExitPosition: {
    width: 30,
    marginLeft: 240,
    marginTop: 15,
  },
  iconExit: {
    color: 'black',
    size: '20',
  },
});

export default styleDrawer;
