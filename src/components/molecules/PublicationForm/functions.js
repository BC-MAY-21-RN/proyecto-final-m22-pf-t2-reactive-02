import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';
import auth from '../../../services/auth';
import firestore from '../../../services/firestore';

const getNewPost = ref => {
  const value = ref.data();
  const newValue = {...value, ['favoritos']: {[auth.getId()]: true}};
  return newValue;
};

const uploadImagesStorage = async images => {
  const arrayUrl = [];

  await Promise.all(
    await images.map(async element => {
      const url = element.url;
      if (url.includes('https://firebasestorage.googleapis.com')) {
        arrayUrl.push(url);
      } else {
        const nameImage = element.url.substring(
          element.url.lastIndexOf('/') + 1,
        );
        const reference = storage().ref(auth.getId() + '/' + nameImage);
        await reference.putFile(url);
        await reference
          .getDownloadURL()
          .then(urlFirebase => arrayUrl.push(urlFirebase));
      }
    }),
  );

  return arrayUrl;
};

const uploadFavoritePostFirestore = (
  idPost,
  changeLoading,
  navigation,
  ref,
) => {
  const data = {
    uidUsuario: auth.getId(),
    idPost: idPost,
    post: getNewPost(ref),
    fecha: firestore.dateNow(),
  };
  firestore
    .setFunction('favoritos', idPost + auth.getId(), data)
    .then(() => {
      changeLoading(false);
      navigation.goBack();
    })
    .catch(error => {
      changeLoading(false);
      Alert.alert('Error', error, [{text: 'ok'}]);
    });
};

const editPost = (data, changeLoading, navigation, idDoc) => {
  firestore
    .updateFunction('posts', idDoc, undefined, data)
    .then(() => {
      firestore
        .getFunction('favoritos', 'idPost', '==', idDoc)
        .then(documents => {
          documents.forEach(document => {
            firestore
              .updateFunction('favoritos', document.ref.id, 'post', data)
              .catch(() => {
                Alert.alert('Error al editar');
              });
          });
        })
        .then(() => {
          navigation.goBack();
          changeLoading(false);
        })
        .catch(() => {
          changeLoading(false);
          Alert.alert('Error al editar publicación');
        });
    })
    .catch(() => {
      changeLoading(false);
      Alert.alert('Error al editar publicación');
    });
};

const addPost = (data, changeLoading, navigation) => {
  firestore
    .addFunction('posts', data)
    .then(response => {
      response
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

const createData = (
  listUrl,
  hashtags,
  location,
  text,
  changeLoading,
  navigation,
  idDoc,
  likes,
  favorites,
  date,
) => {
  const data = {
    uidUsuario: auth.getId(),
    nombreusuario: auth.getName(),
    fotousuario: auth.getPhoto(),
    listaUrl: listUrl,
    ubicacion: location,
    texto: text,
    hashtags: hashtags.toString().replace(/ /g, '').split('#'),
    fecha: date === undefined ? firestore.dateNow() : date,
    likes: likes === undefined ? {} : likes,
    favoritos: favorites === undefined ? {[auth.getId()]: true} : favorites,
  };
  if (idDoc !== undefined) {
    editPost(data, changeLoading, navigation, idDoc);
  } else {
    addPost(data, changeLoading, navigation);
  }
};

const uploadData = (post, changeLoading, navigation, idDoc) => {
  const {hashtags, images, location, text, likes, favorites, date} =
    post.object;
  if (text === '' || hashtags === '') {
    Alert.alert('Complete los datos', '', [{text: 'ok'}]);
  } else {
    changeLoading(true);
    uploadImagesStorage(images).then(listUrl => {
      createData(
        listUrl,
        hashtags,
        location,
        text,
        changeLoading,
        navigation,
        idDoc,
        likes,
        favorites,
        date,
      );
    });
  }
};

export default {uploadData};
