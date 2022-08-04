import React from 'react';
import {View, TextInput, Alert} from 'react-native';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
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

const uploadPostFirestore = (
  listUrl,
  hashtags,
  location,
  text,
  changeLoading,
  navigation,
) => {
  const hashtagsList = hashtags.toString().replace(/ /g, '').split('#');
  firestore()
    .collection('posts')
    .add({
      uidUsuario: auth().currentUser.uid,
      listaUrl: listUrl,
      ubicacion: location,
      texto: text,
      hashtags: hashtagsList,
    })
    .then(respuesta => {
      respuesta
        .get()
        .then(resp =>
          uploadFavoritePostFirestore(resp.id, changeLoading, navigation),
        );
    })
    .catch(error => {
      changeLoading(false);
      Alert.alert('Error', error, [{text: 'ok'}]);
    });
};

const uploadFavoritePostFirestore = (idPost, changeLoading, navigation) => {
  firestore()
    .collection('favoritos')
    .add({
      uidUsuario: auth().currentUser.uid,
      idPost: idPost,
    })
    .then(_ => {
      changeLoading(false);
      navigation.goBack();
    })
    .catch(error => {
      changeLoading(false);
      Alert.alert('Error', error, [{text: 'ok'}]);
    });
};

const uploadData = (post, changeLoading, navigation) => {
  const {hashtags, images, location, text} = post.valuesPost;
  if (text === '' || hashtags === '') {
    Alert.alert('Complete los datos', '', [{text: 'ok'}]);
  } else {
    changeLoading(true);
    uploadImagesStorage(images).then(listUrl => {
      uploadPostFirestore(
        listUrl,
        hashtags,
        location,
        text,
        changeLoading,
        navigation,
      );
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
  changeLoading,
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
      <ButtonForm
        text={'Publicar'}
        onPress={() => uploadData(post, changeLoading, navigation)}
      />
    </View>
  );
}
