import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 15,
    alignSelf: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  textscontainer: {
    flexDirection: 'row',
  },
  toptext: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 10,
    alignSelf: 'center',
  },
  bottomtext: {
    fontSize: 15,
    width: 150,
    maxWidth: 150,
    marginLeft: 10,
  },
});

export default styles;
