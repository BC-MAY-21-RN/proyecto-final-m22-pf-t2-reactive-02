import React, {useState} from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import gs from '../../../const/globalStyles';
import styles from './styles';
import {Icon} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const addCommentsFunction = (text, setInput, postId) => {
  firestore()
    .collection('comentarios')
    .add({
      photo: auth().currentUser.photoURL,
      postUid: postId,
      texto: text,
      userId: auth().currentUser.uid,
      userName: auth().currentUser.displayName,
      fecha: firestore.Timestamp.fromMillis(Date.now()),
    })
    .then(() => {
      setInput('');
    });
};
const updateComments = (id, text, setInput) => {
  firestore()
    .collection('comentarios')
    .doc(id)
    .update({texto: text})
    .then(() => {
      setInput('');
    });
};

const functions = ({text, setText, onHandle, data, setInput, postId}) => {
  if (data.id) {
    updateComments(data.id, text, setInput);
  } else {
    addCommentsFunction(text, setInput, postId);
  }
  setText('');
  onHandle();
};

export default function Comments({
  newComment,
  setNewCommet,
  editComment,
  data,
  setInput,
  postId,
}) {
  const [text, setText] = useState();
  const onHandle = () => {
    setNewCommet(!newComment);
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: auth().currentUser.photoURL}} style={gs.image} />
      <View style={styles.containerInput}>
        <TextInput
          placeholder={'Escribe un comentario...'}
          style={styles.input}
          onChangeText={newText => setText(newText)}
          defaultValue={editComment ? data.text : text}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          functions({onHandle, setText, text, data, setInput, postId});
        }}>
        <Icon name={'ios-paper-plane'} type={'ionicon'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
