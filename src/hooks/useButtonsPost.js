import {useState} from 'react';
import firestore from '../services/firestore';
import auth from '../services/auth';

const typefunctionLike = (functionType, data, disablefunction) => {
  const id = data.idDoc + auth.getId();
  if (functionType === 'put') {
    const dataJSON = {
      uidUsuario: auth.getId(),
      idPost: data.idDoc,
      usuarioOP: data.uidUsuario,
      fecha: firestore.dateNow(),
    };
    firestore.setFunction('likes', id, dataJSON);
  } else {
    firestore.deleteFunction(id, 'likes');
  }
};

const updateLike = (id, newValues, functionType, data, disablefunction) => {
  firestore
    .updateFunction('posts', id, 'likes', newValues)
    .then(() => {
      firestore
        .updateFunction('favoritos', id + auth.getId(), 'post.likes', newValues)
        .then(() => {
          typefunctionLike(functionType, data, disablefunction);
        })
        .catch(() => {
          typefunctionLike(functionType, data, disablefunction);
        });
    })
    .catch(() => {});
};

const updateFavorite = (id, newValues, functionType, data, disablefunction) => {
  firestore
    .updateFunction('posts', id, 'favoritos', newValues)
    .then(() => {
      const newId = id + auth.getId();
      if (functionType === 'put') {
        const newData = {...data, favoritos: {[auth.getId()]: true}};
        delete newData.idDoc;
        const dataJSON = {
          uidUsuario: auth.getId(),
          idPost: id,
          post: newData,
          fecha: newData.fecha,
        };
        firestore.setFunction('favoritos', newId, dataJSON);
      } else {
        firestore.deleteFunction(newId, 'favoritos');
      }
    })
    .catch(() => {});
};

const filterType = (data, type, disablefunction, obj, functionType, value) => {
  if (type === 'likes') {
    updateLike(data.idDoc, obj, functionType, data, disablefunction, value);
  } else {
    updateFavorite(data.idDoc, obj, functionType, data, disablefunction, value);
  }
};

const deleteComponent = (postdata, handleData, hashtag, data, type) => {
  const hashtags = hashtag.toString().replace(/ /g, '').split('#');
  if (hashtags[2] === 'Guardados' && type !== 'likes') {
    const array = postdata.filter(item => item !== data);
    handleData(array);
  }
};

const put = (data, type, disablefunction, value) => {
  const obj = {...data[type], ...{[auth.getId()]: true}};
  filterType(data, type, disablefunction, obj, 'put', value);
};

const remove = (data, type, disablefunction, value) => {
  const obj = data[type];
  delete obj[auth.getId()];
  filterType(data, type, disablefunction, obj, 'remove', value);
};

const sendEvent = (
  data,
  type,
  value,
  hashtag,
  setValue,
  posts = {data: []},
) => {
  if (value.value) {
    remove(data, type, setValue, value);
    deleteComponent(posts.data, posts.handleData, hashtag, data, type);
    const hashtags = hashtag.toString().replace(/ /g, '').split('#');
    if (hashtags[2] !== 'Guardados' || type === 'likes') {
      setValue({...value, ...{value: !value.value}});
    }
  } else {
    put(data, type, setValue, value);
    setValue({...value, ...{value: !value.value}});
  }
};

export default function useButtonsPost(x, y, posts, hashtag = '') {
  const [like, setLike] = useState({value: x, disable: false});
  const [favorite, setFavorite] = useState({value: y, disable: false});
  const goComment = (data, n) => n.navigate('commentsScreen', {data: data});
  const goAdop = (data, n) => n.navigate('adoptionScreen', {data: data});
  const sendLike = data =>
    sendEvent(data, 'likes', like, hashtag, setLike, posts);
  const sendFavorite = data =>
    sendEvent(data, 'favoritos', favorite, hashtag, setFavorite, posts);

  return {
    onPress: [sendLike, goAdop, goComment, sendFavorite],
    color: [like.value, false, false, favorite.value],
    disable: [like.disable, false, false, favorite.disable],
  };
}
