import React from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import ProfileHeader from '../../components/atoms/ProfileHeader';
import ProfileContent from '../../components/molecules/ProfileContent';

export default function ProfileScreen({navigation}) {
  const user = auth().currentUser;

  return (
    <View style={styles.background}>
      <ProfileHeader image={user.photoURL} name={user.displayName} />
      <ProfileContent navigation={navigation} />
    </View>
  );
}
