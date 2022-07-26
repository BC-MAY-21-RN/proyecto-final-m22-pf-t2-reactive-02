import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import NameAppSVG from '../../assets/icons/nameapp.svg';
import LogoSVG from '../../assets/icons/logo.svg';
import Icons from '../../components/atoms/Icons';

export default function WelcomeScreen({navigation}) {
  const [change, setChange] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChange(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (change) {
      navigation.replace('registerScreen');
    }
  }, [change, navigation]);

  return (
    <View style={styles.containerName}>
      <Icons IconProp={NameAppSVG} />
      <Icons IconProp={LogoSVG} />
      <ActivityIndicator size="large" color="#AD6485" marginVertical={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerName: {
    alignItems: 'center',
    marginVertical: 200,
  },
});
