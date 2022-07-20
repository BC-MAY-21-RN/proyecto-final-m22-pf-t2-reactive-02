import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import NotificationComponent from '../../components/atoms/NotificationComponent';

const logout = () => {
  auth()
    .signOut()
    .then(() => {});
};

export default function NotificationScreen() {
  return (
    <View>
      <NotificationComponent />
      <Text>Notification</Text>
      <TouchableOpacity
        onPress={() => {
          logout();
        }}>
        <Text>Salir</Text>
      </TouchableOpacity>
    </View>
  );
}
