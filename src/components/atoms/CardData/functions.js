import {Alert} from 'react-native';
import firestore from '../../../services/firestore';

const edit = (text, data) => {
  text.handleData({
    ['updateComment']: true,
    ['idComment']: data.idDoc,
    ['text']: data.texto,
  });
};

const deleteComment = (idDoc, comments) => {
  firestore
    .deleteFunction(idDoc, 'comentarios')
    .then(() => {
      const data = comments.data;
      const newData = data.filter(item => item.idDoc !== idDoc);
      comments.handleComments(newData);
    })
    .catch(() => {
      Alert.alert('Error al eliminar el comentario.');
    });
};

export default {deleteComment, edit};
