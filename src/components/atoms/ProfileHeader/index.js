import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function UserHeader({image, name}) {
  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
