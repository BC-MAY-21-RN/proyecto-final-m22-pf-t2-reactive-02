import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import values from '../../../const/hashtags';

const foundFavorite = data => {
  return data.favoritos[auth().currentUser.uid];
};

const foundLikes = data => {
  return data.likes[auth().currentUser.uid];
};

const foundAdoption = data => {
  const hashtags = data.hashtags;
  let contador = 0;
  values.adoption.map(element => {
    if (hashtags.indexOf(element) >= 0) {
      contador++;
    }
  });
  return contador;
};

const updateLike = (id, likes, functionType, data, disablefunction) => {
  firestore()
    .collection('posts')
    .doc(id)
    .update({likes: likes})
    .then(() => {
      firestore()
        .collection('favoritos')
        .doc(id + auth().currentUser.uid)
        .update({['post.likes']: likes})
        .then(() => {
          if (functionType === 'put') {
            addLike(data, disablefunction);
          } else {
            deleteLike(data, disablefunction);
          }
        })
        .catch(() => {
          if (functionType === 'put') {
            addLike(data, disablefunction);
          } else {
            deleteLike(data, disablefunction);
          }
        });
    });
};

const addLike = (data, disablefunction) => {
  firestore()
    .collection('likes')
    .doc(data.idDoc + auth().currentUser.uid)
    .set({
      uidUsuario: auth().currentUser.uid,
      idPost: data.idDoc,
      usuarioOP: data.uidUsuario,
      fecha: firestore.Timestamp.fromMillis(Date.now()),
    })
    .then(() => disablefunction(false))
    .catch(() => disablefunction(false));
};

const deleteLike = (data, disablefunction) => {
  firestore()
    .collection('likes')
    .doc(data.idDoc + auth().currentUser.uid)
    .delete()
    .then(() => disablefunction(false))
    .catch(() => disablefunction(false));
};

const addFavorite = (id, data, disablefunction) => {
  const newData = {...data, favoritos: {[auth().currentUser.uid]: true}};
  delete newData.idDoc;
  firestore()
    .collection('favoritos')
    .doc(id + auth().currentUser.uid)
    .set({
      uidUsuario: auth().currentUser.uid,
      idPost: id,
      post: newData,
      fecha: firestore.Timestamp.fromMillis(Date.now()),
    })
    .then(_ => disablefunction(false))
    .catch(error => disablefunction(false));
};

const deleteFavorite = (id, disablefunction) => {
  firestore()
    .collection('favoritos')
    .doc(id + auth().currentUser.uid)
    .delete()
    .then(() => disablefunction(false))
    .catch(() => disablefunction(false));
};

const updateFavorite = (id, favorites, functionType, data, disablefunction) => {
  firestore()
    .collection('posts')
    .doc(id)
    .update({favoritos: favorites})
    .then(() => {
      if (functionType === 'put') {
        addFavorite(id, data, disablefunction);
      } else {
        firestore()
          .collection('favoritos')
          .doc(id + auth().currentUser.uid)
          .update({['post.favoritos']: favorites})
          .then(() => {
            deleteFavorite(id, disablefunction);
          });
      }
    });
};

const filterType = (data, type, disablefunction, obj) => {
  if (type === 'likes') {
    updateLike(data.idDoc, obj, 'put', data, disablefunction);
  } else {
    updateFavorite(data.idDoc, obj, 'put', data, disablefunction);
  }
};

const put = (data, type, disablefunction) => {
  const obj = {...data[type], ...{[auth().currentUser.uid]: true}};
  filterType(data, type, disablefunction, obj);
};

const remove = (data, type, disablefunction) => {
  const obj = data[type];
  delete obj[auth().currentUser.uid];
  filterType(data, type, disablefunction, obj);
};

const deleteComponent = (getData, setGetData, hashtag, data, type) => {
  const hashtags = hashtag.toString().replace(/ /g, '').split('#');
  if (hashtags[2] === 'Guardados' && type !== 'likes') {
    const array = getData.filter(item => item !== data);
    setGetData(array);
  }
};

const buttonsFunction = (
  value,
  setValue,
  data,
  type,
  getData,
  setGetData,
  hashtag,
  disablefunction,
) => {
  if (value) {
    disablefunction(true);
    remove(data, type, disablefunction);
    deleteComponent(getData, setGetData, hashtag, data, type);
    const hashtags = hashtag.toString().replace(/ /g, '').split('#');
    if (hashtags[2] !== 'Guardados' || type === 'likes') {
      setValue(!value);
    }
  } else {
    disablefunction(true);
    put(data, type, disablefunction);
    setValue(!value);
  }
};

export default {buttonsFunction, foundFavorite, foundLikes, foundAdoption};
