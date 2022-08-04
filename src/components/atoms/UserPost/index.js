import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import globalstyles from '../../../const/globalStyles';

export default function UserPost({name, time, image}) {
  return (
    <View style={styles.container}>
      <Image
        style={globalstyles.image}
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
