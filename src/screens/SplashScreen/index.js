import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
import NameAppSVG from '../../assets/icons/nameapp.svg';
import LogoSVG from '../../assets/icons/logo.svg';
import Icons from '../../components/atoms/Icons';
import useStateHook from '../../hooks/useStateHook';
import useSplash from '../../hooks/useSplash';

export default function SplashScreen({navigation}) {
  const splash = useStateHook(false);
  useSplash(splash, navigation);

  return (
    <View style={styles.containerName}>
      <Icons IconProp={NameAppSVG} />
      <Icons IconProp={LogoSVG} />
      <ActivityIndicator size="large" color="#AD6485" marginVertical={10} />
    </View>
  );
}
