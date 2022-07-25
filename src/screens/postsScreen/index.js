import React from 'react';
import {View, Text} from 'react-native';
import AddButton from '../../components/atoms/AddButton';
import Post from '../../components/molecules/Post';
import styles from './styles';

export default function PostsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Post />
      <AddButton navigation={navigation} />
    </View>
  );
}
