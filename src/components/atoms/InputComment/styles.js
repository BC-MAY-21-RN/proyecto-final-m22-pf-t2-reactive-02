import {Dimensions, StyleSheet} from 'react-native';

const styles = v =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: 'white',
      height: 60,
      flexDirection: 'row',
      paddingLeft: 10,
      padding: 5,
      position: 'absolute',
      bottom: 0,
    },
    containerInput: {
      width: v ? '65%' : '75%',
      height: 35,
      borderRadius: 20,
      marginLeft: 10,
      marginTop: 7,
    },
    input: {
      padding: 10,
      width: v ? Dimensions.get('screen').width - 140 : '100%',
      height: 35,
      borderRadius: 20,
      backgroundColor: '#EAE5E5',
      borderColor: '#979797',
      borderWidth: 0.4,
    },
    icon: {
      transform: [{rotate: '45deg'}],
    },
    iconContainer: {
      position: 'absolute',
      right: v ? 45 : 10,
      top: 17,
      transform: [{rotate: '45deg'}],
    },
    cancel: {
      position: 'absolute',
      right: 10,
      top: 17,
    },
  });

export default styles;
