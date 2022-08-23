import React from 'react';
import {View, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import InfoProfile from '../../components/molecules/InfoProfile';
import useProfile from '../../hooks/useProfile';
import styles from './styles';

export default function ProfileScreen({navigation, route}) {
  const profileData = useProfile(route.params.id);
  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Icon
          name="arrowleft"
          type="antdesign"
          containerStyle={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <Image
          source={{
            uri: profileData.userData.imagenurl,
          }}
          style={styles.img}
        />
        <Text style={styles.name}>{profileData.userData.nombre}</Text>
      </View>
      <InfoProfile profileData={profileData} />
    </View>
  );
}
