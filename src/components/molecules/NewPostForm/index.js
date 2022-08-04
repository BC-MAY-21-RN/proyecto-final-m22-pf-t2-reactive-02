import React from 'react';
import {View, TextInput, Alert} from 'react-native';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import ButtonForm from '../../atoms/ButtonForm';
import InputForm from '../../atoms/inputForm';
import Header from '../../atoms/header';
import styles from './styles';
import PagerImageLocation from '../PagerImageLocation';

const uploadImagesStorage = async images => {
  const arrayUrl = [];

  await Promise.all(
    await images.map(async element => {
      const url = element.url;
      const nameImage = element.url.substring(element.url.lastIndexOf('/') + 1);
      const reference = storage().ref(auth().currentUser.uid + '/' + nameImage);
      await reference.putFile(url);
      await reference
        .getDownloadURL()
        .then(urlFirebase => arrayUrl.push(urlFirebase));
    }),
  );

  return arrayUrl;
};

const uploadPostFirestore = () => {};

const uploadData = post => {
  const {hashtags, images, location, text} = post.valuesPost;
  if (text === '' || hashtags === '') {
    Alert.alert('Complete los datos', '', [{text: 'ok'}]);
  } else {
    uploadImagesStorage(images).then(listUrl => {
      uploadPostFirestore();
    });
  }
};



export default function NewPostForm({
  navigation,
  changePost,
  route,
  post,
  changeIndex,
  changeVisible,
}) {
  return (
    <View style={styles.container}>
      <Header text={'Crear publicación'} navigation={navigation} />
      <TextInput
        multiline
        numberOfLines={15}
        placeholder={'Escribe lo que piensas...'}
        style={styles.textInput}
        onChange={e => changePost(e.nativeEvent.text, 'text')}
      />
      <InputForm
        text={'Añade un #Hashtag'}
        hashtag={'#' + route.params.hashtag}
        change={changePost}
        keyvalue={'hashtags'}
      />
      <PagerImageLocation
        change={changePost}
        changeIndex={changeIndex}
        post={post}
        changeVisible={changeVisible}
      />
      <ButtonForm text={'Publicar'} onPress={() => uploadData(post)} />
    </View>
  );
}
