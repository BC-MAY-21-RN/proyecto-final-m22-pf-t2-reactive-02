import React, {useState} from 'react';
import {Text, View, Modal} from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';
import UserPost from '../UserPost';
import Verify from '../DrawerItems/functions';
import {Overlay} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {Tooltip} from 'react-native-elements';

export default function NotificationComponent({
  data,
  setEditComment,
  setEditText,
  newComment,
  setNewCommet,
  getData,
  setGetData,
}) {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const deleteComments = (id, setGetDatas, getDatas) => {
    firestore()
      .collection('comentarios')
      .doc(id)
      .delete()
      .then(() => {
        setGetDatas(
          getDatas.filter(item => {
            item.idDoc !== id;
          }),
        );
      });
  };

  const callInputComment = () => {
    setEditText({text: data.texto, id: data.idDoc});
  };

  return (
    <Card>
      <View style={styles.iconPosition}>
        <UserPost
          name={Verify(data.userName) ? data.userName : 'Funganito'}
          time={'7 hrs'}
          image={
            Verify(data.photo)
              ? data.photo
              : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg'
          }
        />
        <Tooltip
          popover={
            <View>
              <Button
                title="Editar"
                onPress={() => {
                  callInputComment();
                  setEditComment(true);
                  toggleOverlay();
                }}
              />
              <Button
                title="Eliminar"
                onPress={() => {
                  deleteComments(data.idDoc, setGetData, getData);
                  setNewCommet(!newComment);
                  toggleOverlay();
                }}
              />
            </View>
          }>
          <Icon
            name={'dots-three-vertical'}
            type={'entypo'}
            size={20}
            containerStyle={styles.icon}
          />
        </Tooltip>
      </View>
      <Text style={{marginHorizontal: 15}}>{data.texto}</Text>
    </Card>
  );
}
