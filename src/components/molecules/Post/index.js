import React from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import ButtonsPost from '../../atoms/ButtonsPost';
import UserPost from '../../atoms/UserPost';
import Location from '../../atoms/Location';
import styles from './styles';

const {width} = Dimensions.get('window');
const height = 300;
const images = [
  'https://www.hogarmania.com/archivos/202202/gato-esfinge-portada-1280x720x80xX.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNenjnSNt_2L4Y16-zlFrh5GEl7Owc37MyUg&usqp=CAU',
];

export default function Post() {
  return (
    <View style={styles.container}>
      <UserPost />
      <Location city="Manzanillo" state="Colima" />
      <Text style={styles.text}>
        HELPPP! my cat's hair is falling, I tried all and nothing work, I need
        your help with this!!..
      </Text>
      <View style={styles.contImage}>
        <ScrollView pagingEnabled horizontal style={{width, height}}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={{uri: image}}
              style={{height, width, resizeMode: 'cover'}}
            />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {images.map((i, k) => (
            <Text key={k} style={styles.dotActive}>
              ⬤
            </Text>
          ))}
        </View>
      </View>
      <ButtonsPost />
    </View>
  );
}
