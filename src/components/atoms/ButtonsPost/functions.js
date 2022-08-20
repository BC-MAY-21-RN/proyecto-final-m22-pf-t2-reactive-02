import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import values from '../../../const/hashtags';

const updateFunction = (collection, id, key, data) => {
  return firestore()
    .collection(collection)
    .doc(id)
    .update({[key]: data});
};

const setFunction = (collection, id, data, disablefunction) => {
  firestore()
    .collection(collection)
    .doc(id)
    .set(data)
    .then(() => disablefunction(false))
    .catch(() => disablefunction(false));
};

const deleteFunction = (id, disablefunction, collection) => {
  firestore()
    .collection(collection)
    .doc(id)
    .delete()
    .then(() => disablefunction(false))
    .catch(() => disablefunction(false));
};

const updateFavorite = (id, newValues, functionType, data, disablefunction) => {
  updateFunction('posts', id, 'favoritos', newValues)
    .then(() => {
      const newId = id + auth().currentUser.uid;
      if (functionType === 'put') {
        const newData = {...data, favoritos: {[auth().currentUser.uid]: true}};
        delete newData.idDoc;
        const dataJSON = {
          uidUsuario: auth().currentUser.uid,
          idPost: id,
          post: newData,
          fecha: firestore.Timestamp.fromMillis(Date.now()),
        };
        setFunction('favoritos', newId, dataJSON, disablefunction);
      } else {
        deleteFunction(newId, disablefunction, 'favoritos');
      }
    })
    .catch(() => {});
};

const typefunctionLike = (functionType, data, disablefunction) => {
  const id = data.idDoc + auth().currentUser.uid;
  if (functionType === 'put') {
    const dataJSON = {
      uidUsuario: auth().currentUser.uid,
      idPost: data.idDoc,
      usuarioOP: data.uidUsuario,
      fecha: firestore.Timestamp.fromMillis(Date.now()),
    };
    setFunction('likes', id, dataJSON, disablefunction);
  } else {
    deleteFunction(id, disablefunction, 'likes');
  }
};

const updateLike = (id, newValues, functionType, data, disablefunction) => {
  updateFunction('posts', id, 'likes', newValues)
    .then(() => {
      updateFunction(
        'favoritos',
        id + auth().currentUser.uid,
        'post.likes',
        newValues,
      )
        .then(() => {
          typefunctionLike(functionType, data, disablefunction);
        })
        .catch(() => {
          typefunctionLike(functionType, data, disablefunction);
        });
    })
    .catch(() => {});
};

const filterType = (data, type, disablefunction, obj, functionType) => {
  if (type === 'likes') {
    updateLike(data.idDoc, obj, functionType, data, disablefunction);
  } else {
    updateFavorite(data.idDoc, obj, functionType, data, disablefunction);
  }
};

const put = (data, type, disablefunction) => {
  const obj = {...data[type], ...{[auth().currentUser.uid]: true}};
  filterType(data, type, disablefunction, obj, 'put');
};

const remove = (data, type, disablefunction) => {
  const obj = data[type];
  delete obj[auth().currentUser.uid];
  filterType(data, type, disablefunction, obj, 'remove');
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
  disablefunction(true);
  if (value) {
    remove(data, type, disablefunction);
    deleteComponent(getData, setGetData, hashtag, data, type);
    const hashtags = hashtag.toString().replace(/ /g, '').split('#');
    if (hashtags[2] !== 'Guardados' || type === 'likes') {
      setValue(!value);
    }
  } else {
    put(data, type, disablefunction);
    setValue(!value);
  }
};

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

export default {buttonsFunction, foundFavorite, foundLikes, foundAdoption};
