import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const logout = () => {
  auth()
    .signOut()
    .then(() => {});
};

export default function ConfigurationScreen() {
  return (
    <View>
      <Text>Configuration</Text>
      <TouchableOpacity
        onPress={() => {
          logout();
        }}>
        <Text>Salir</Text>
      </TouchableOpacity>
    </View>
  );
}
