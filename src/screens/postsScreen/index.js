import React from 'react';
import {View} from 'react-native';
import AddButton from '../../components/atoms/AddButton';
import Post from '../../components/molecules/Post';
import styles from './styles';
import Comments from '../../components/atoms/Comments';

export default function PostsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Post navigation={navigation} />
      <AddButton navigation={navigation} />
    </View>
  );
}
