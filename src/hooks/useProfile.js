import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import firestore from '../services/firestore';

const getStats = (id, setPosts, setLikes, setSaves, setFinish) => {
  firestore
    .getFunction('posts', 'uidUsuario', '==', id)
    .then(documents => setPosts(documents.size))
    .then(() => {
      firestore
        .getFunction('likes', 'usuarioOP', '==', id)
        .then(documents => setLikes(documents.size))
        .then(() => {
          firestore
            .getFunction('favoritos', 'uidUsuario', '==', id)
            .then(documents => setSaves(documents.size));
        });
    })
    .catch()
    .finally(() => {
      setFinish(true);
    });
};

const getDatauser = (
  id,
  setUserData,
  setPosts,
  setLikes,
  setSaves,
  setFinish,
) => {
  firestore
    .getFunction('usuarios', 'uid', '==', id)
    .then(documents => {
      documents.forEach(document => setUserData(document.data()));
    })
    .then(() => {
      getStats(id, setPosts, setLikes, setSaves, setFinish);
    })
    .catch(() => {
      Alert.alert('Error al buscar el usuario');
    });
};

export default function useProfile(id) {
  const [userData, setUserData] = useState([]);
  const [posts, setPosts] = useState(0);
  const [likes, setLikes] = useState(0);
  const [saves, setSaves] = useState(0);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (!finish) {
      getDatauser(id, setUserData, setPosts, setLikes, setSaves, setFinish);
    }
  }, [finish, id]);

  return {userData, stats: [posts, likes, saves], finish};
}
