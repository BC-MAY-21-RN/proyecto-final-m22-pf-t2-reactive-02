import React from 'react';
import {View, Text, Image} from 'react-native';
import ButtonsPost from '../../atoms/ButtonsPost';
import UserPost from '../../atoms/UserPost';
import styles from './styles';

export default function Post() {
  return (
    <View style={styles.container}>
      <UserPost></UserPost>
      <Text style={styles.text}>
        HELPPP! the hair of my cat it's fall, I tried all and nothing work, I
        need your help with this!!..
      </Text>
      <View style={styles.contImage}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNenjnSNt_2L4Y16-zlFrh5GEl7Owc37MyUg&usqp=CAU',
          }}
        />
      </View>
      <ButtonsPost></ButtonsPost>
    </View>
  );
}
