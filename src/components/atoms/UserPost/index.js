import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export default function UserPost() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg',
        }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Joe Stockon</Text>
        <Text>5h ago</Text>
      </View>
    </View>
  );
}
