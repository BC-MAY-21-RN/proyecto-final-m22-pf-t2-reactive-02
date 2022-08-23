import firestore from '../../../services/firestore';
import auth from '../../../services/auth';
import {Alert} from 'react-native';
import initialValues from '../../../const/initialValues';

const addComment = (text, postid, comments) => {
  const commentData = {
    photo: auth.getPhoto(),
    postUid: postid,
    texto: text,
    userId: auth.getId(),
    userName: auth.getName(),
    fecha: firestore.dateNow(),
  };
  firestore
    .addFunction('comentarios', commentData)
    .then(document => {
      const data = comments.data;
      comments.handleComments([{...commentData, idDoc: document.id}, ...data]);
    })
    .catch(() => {
      Alert.alert('Error al hacer comentario');
    });
};

const updateComment = (id, text, comments) => {
  firestore
    .updateFunction('comentarios', id, 'texto', text)
    .then(() => {
      const data = comments.data;
      data[data.findIndex(item => item.idDoc === id)].texto = text;
      comments.handleComments([]);
      comments.handleComments(data);
    })
    .catch(() => {
      Alert.alert('Error al editar');
    });
};

const sendComment = (text, postid, comments) => {
  if (text.dataForm.object.updateComment) {
    updateComment(
      text.dataForm.object.idComment,
      text.dataForm.object.text,
      comments,
    );
    text.handleData(initialValues.initialComment);
  } else {
    addComment(text.dataForm.object.text, postid, comments);
    text.handleData(initialValues.initialComment);
  }
};

export default {sendComment};
