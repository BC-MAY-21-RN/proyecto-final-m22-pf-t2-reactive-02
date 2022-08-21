import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '../services/firestore';
import auth from '../services/auth';

function favorites(handleData, handleFinish) {
  firestore
    .getFunctionorderBy(
      'favoritos',
      'uidUsuario',
      '==',
      auth.getId(),
      'fecha',
      'desc',
    )
    .then(querySnapshot => {
      var data = [];
      querySnapshot.forEach(documentSnapshot => {
        data.push({
          ...documentSnapshot.data().post,
          idDoc: documentSnapshot.data().idPost,
        });
        handleData(data);
      });
    })
    .catch(() => {})
    .finally(() => {
      handleFinish(true);
    });
}

function noFavorites(handleData, handleFinish, hashtagforSearch) {
  firestore
    .getFunctionorderBy(
      'posts',
      'hashtags',
      'array-contains-any',
      hashtagforSearch,
      'fecha',
      'desc',
    )
    .then(querySnapshot => {
      var data = [];
      querySnapshot.forEach(documentSnapshot => {
        data.push({
          ...documentSnapshot.data(),
          idDoc: documentSnapshot.ref.id,
        });
        handleData(data);
      });
    })
    .catch(() => {})
    .finally(() => handleFinish(true));
}

function createArray(handleData, handleFinish, hashtag) {
  const hashtags = hashtag.toString().replace(/ /g, '').split('#');
  const noNormalhashtag = hashtags.filter((_, i) => i !== 0);
  const hashtagforSearch = hashtags[1] === 'Normal' ? [''] : noNormalhashtag;

  if (hashtags[2] === 'Guardados') {
    favorites(handleData, handleFinish);
  } else {
    noFavorites(handleData, handleFinish, hashtagforSearch);
  }
}

export default function usePost(params) {
  const [data, setData] = useState([]);
  const [finish, setFinish] = useState(false);

  const handleData = value => setData(value);
  const handleFinish = value => setFinish(value);
  const reload = param => {
    handleFinish(false);
    createArray(handleData, param.hashtag);
  };

  useFocusEffect(
    useCallback(() => {
      if (params.goback !== undefined) {
        handleData([]);
        handleFinish(false);
      }
      createArray(handleData, handleFinish, params.hashtag);
    }, [params.hashtag, params.goback]),
  );

  return {data, handleData, finish, reload};
}
