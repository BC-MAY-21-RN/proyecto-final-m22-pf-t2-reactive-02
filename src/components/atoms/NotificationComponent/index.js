import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';
import UserPost from '../UserPost';
import Verify from '../DrawerItems/functions';
import {Overlay} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

export default function NotificationComponent({data}) {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const deleteComments = id => {
    firestore()
      .collection('comentarios')
      .doc(id)
      .delete()
      .then(() => {
        Alert.alert('Producto Elimiando!');
      });
  };
  const updateComments = id => {
    firestore()
      .collection('comentarios')
      .doc(id)
      .update({texto: 'motomami'})
      .then(() => {
        Alert.alert('Producto Actualizado!');
      });
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
        <Icon
          name={'dots-three-vertical'}
          type={'entypo'}
          size={20}
          onPress={() => {
            toggleOverlay();
          }}
          containerStyle={styles.icon}
        />
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <Button
            title="Editar"
            onPress={() => {
              updateComments(data.idDoc);
            }}
          />
          <Button
            title="Eliminar"
            onPress={() => {
              deleteComments(data.idDoc);
            }}
          />
        </Overlay>
      </View>
      <Text style={{marginHorizontal: 15}}>{data.texto}</Text>
    </Card>
  );
}

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  iconPosition: {flexDirection: 'row'},
  icon: {
    marginLeft: 130,
  },
});
