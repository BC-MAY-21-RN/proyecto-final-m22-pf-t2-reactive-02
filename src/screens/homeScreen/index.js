import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import Post from '../../components/molecules/Post';

const logout = () => {
  auth()
    .signOut()
    .then(() => {});
};

export default function HomeScreen() {
  return (
    <View>
      <Post />
    </View>
  );
}
