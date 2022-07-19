import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export default function UserPost({name, time, image}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text>{time}</Text>
      </View>
    </View>
  );
}
