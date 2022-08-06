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
  firestore()
    .collection('posts')
    .add({
      uidUsuario: auth().currentUser.uid,
      nombreusuario: auth().currentUser.displayName,
      fotousuario: auth().currentUser.photoURL,
      listaUrl: listUrl,
      ubicacion: location,
      texto: text,
      hashtags: hashtags.toString().replace(/ /g, '').split('#'),
      fecha: firestore.Timestamp.fromMillis(Date.now()),
      likes: {},
      favoritos: {[auth().currentUser.uid]: true},
    })
    .then(respuesta => {
      respuesta
        .get()
        .then(resp =>
          uploadFavoritePostFirestore(resp.id, changeLoading, navigation, resp),
        );
    })
    .catch(error => {
      changeLoading(false);
      Alert.alert('Error', error, [{text: 'ok'}]);
    });
};

const getNewPost = ref => {
  const value = ref.data();
  const newValue = {...value, ['favoritos']: {[auth().currentUser.uid]: true}}; //value {[auth().currentUser.uid]: true});
  return newValue;
};

const uploadFavoritePostFirestore = (
  idPost,
  changeLoading,
  navigation,
  ref,
) => {
  firestore()
    .collection('favoritos')
    .add({
      uidUsuario: auth().currentUser.uid,
      idPost: idPost,
      post: getNewPost(ref),
      fecha: firestore.Timestamp.fromMillis(Date.now()),
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
        hashtag={route.params.hashtag}
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
