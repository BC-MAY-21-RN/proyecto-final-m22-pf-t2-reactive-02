import React from 'react';
import {View} from 'react-native';
import AddButton from '../../components/atoms/AddButton';
import Post from '../../components/molecules/Post';
import styles from './styles';

export default function PostsScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Post navigation={navigation} />
      <AddButton navigation={navigation} hashtag={route.params.hashtag} />
    </View>
  );
}
