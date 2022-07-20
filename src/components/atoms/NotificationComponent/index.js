import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserPost from '../UserPost';
import auth from '@react-native-firebase/auth';
import functions from '../DrawerItems/functions';

export default function NotificationComponent() {
  const [name, setName] = useState(functions.VerifyName());
  const [photo, setPhoto] = useState(functions.VerifyPhoto());
  const user = auth().currentUser;

  return (
    <View style={styles.container}>
      <UserPost
        name={name ? user.displayName : 'Funganito'}
        time={'7h ago'}
        image={
          photo
            ? user.photoURL
            : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg'
        }
      />
      <Text style={styles.text}>
        Pablo clavo un clavito en la esquina de pablito, pablito tenía frio y
        clavo otro clavito.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 7,
    paddingBottom: 7,
  },
  text: {
    marginHorizontal: 10,
  },
});
