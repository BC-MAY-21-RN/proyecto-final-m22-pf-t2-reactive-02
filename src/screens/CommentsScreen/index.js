import React from 'react';
import {View} from 'react-native';
import Post from '../../components/molecules/Post';
import Comments from '../../components/atoms/Comments';
import Header from '../../components/atoms/header';
import {ScrollView} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

export default function CommentsScreen({navigation}) {
  const user = auth().currentUser;

  return (
    <View style={{height: '100%'}}>
      <Header text={'Comentarios'} navigation={navigation} />
      <ScrollView>
        <Post navigation={navigation} />
      </ScrollView>
      <Comments />
    </View>
  );
}
