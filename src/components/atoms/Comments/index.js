import React, {useState} from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import gs from '../../../const/globalStyles';
import styles from './styles';
import {Icon} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const addCommentsFunction = text => {
  firestore()
    .collection('comentarios')
    .add({
      photo: auth().currentUser.photoURL,
      postUid: 'hd54gg',
      texto: text,
      userId: auth().currentUser.uid,
      userName: auth().currentUser.displayName,
      fecha: firestore.Timestamp.fromMillis(Date.now()),
    })
    .then(() => {});
};

const functions = ({text, setText, onHandle}) => {
  addCommentsFunction(text);
  setText('');
  onHandle();
};

export default function Comments({newComment, setNewCommet}) {
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
          defaultValue={text}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          functions({onHandle, setText, text});
        }}>
        <Icon name={'ios-paper-plane'} type={'ionicon'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
