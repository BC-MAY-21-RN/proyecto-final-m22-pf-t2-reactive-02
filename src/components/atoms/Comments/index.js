import React, {useState} from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import globalstyles from '../../../const/globalStyles';
import styles from './styles';
import {Icon} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import Verify from '../DrawerItems/functions';

export default function Comments(props) {
  const {newComment, setNewCommet} = props;
  const onHandle = () => {
    setNewCommet(!newComment);
  };
  const user = auth().currentUser;
  const photo = Verify(user.photoURL);
  const [text, setText] = useState();
  const addCommentsFunction = () => {
    firestore()
      .collection('comentarios')
      .add({
        photo: user.photoURL,
        postUid: 'hd54gg',
        texto: text,
        userId: user.uid,
        userName: user.displayName,
        fecha: firestore.Timestamp.fromMillis(Date.now()),
      })
      .then(() => {});
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: photo
            ? user.photoURL
            : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg',
        }}
        style={globalstyles.image}
      />
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
          addCommentsFunction();
          setText('');
          onHandle();
        }}>
        <Icon
          name={'ios-paper-plane'}
          type={'ionicon'}
          color={'#D3A6BA'}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}
