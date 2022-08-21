import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import firestore from '../services/firestore';

function getComments(handleComments, handleFinish, id) {
  var dataComment = [];
  firestore
    .getFunction('comentarios', 'postUid', '==', id)
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        const iddoc = documentSnapshot.ref.id;
        dataComment.push({
          idDoc: iddoc,
          ...documentSnapshot.data(),
        });
        handleComments(dataComment);
      });
    })
    .catch(err => Alert.alert('Error', err))
    .finally(() => handleFinish(true));
}

export default function useComments(id) {
  const [data, setData] = useState([]);
  const [finish, setFinish] = useState(false);
  const handleComments = value => setData(value);
  const handleFinish = value => setFinish(value);

  useEffect(() => {
    if (!finish) {
      getComments(handleComments, handleFinish, id);
    }
  });

  return {data, finish, handleComments};
}
