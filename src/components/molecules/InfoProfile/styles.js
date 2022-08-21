import {StyleSheet} from 'react-native';
import colors from '../../../const/colors';

const styles = StyleSheet.create({
  infoProfileContainer: {
    marginTop: 40,
    backgroundColor: colors.white,
    borderRadius: 30,
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  statspostContainer: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textscontainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  toptext: {
    fontSize: 16,
    alignSelf: 'center',
  },
  bottomtext: {
    fontSize: 16,
    color: '#784B90',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
