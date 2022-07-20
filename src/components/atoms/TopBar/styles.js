import {StyleSheet} from 'react-native';

const menuStyle = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(211, 166, 186, 0.9)',
    height: 50,
  },
  iconsPosition: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 12,
    height: 50,
  },
  iconMenu: {
    marginRight: 10,
    color: '#717171',
  },
  logo: {
    marginLeft: 8,
  },
  iconSearch: {
    marginLeft: 190,
    marginTop: 4,
  },
  iconSearch2: {
    marginTop: 4,
  },
  input: {
    width: '90%',
    height: 30,
    padding: 5,
    paddingLeft: 10,
    marginLeft: 0,
    borderRadius: 10,
  },
  topbar: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '75%',
    height: 30,
    marginLeft: 20,
  },
  inputContainer: {
    width: '75%',
    flexDirection: 'row',
    height: 30,
    borderRadius: 20,
    backgroundColor: 'white',
    marginLeft: 15,
  },
});

export default menuStyle;
