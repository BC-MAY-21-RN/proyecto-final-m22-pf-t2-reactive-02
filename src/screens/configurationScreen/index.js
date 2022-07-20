import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import TopBar from '../../components/atoms/TopBar';

const logout = () => {
  auth()
    .signOut()
    .then(() => {});
};

export default function ConfigurationScreen({navigation}) {
  return (
    <View>
      <TopBar navigation={navigation} />
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
