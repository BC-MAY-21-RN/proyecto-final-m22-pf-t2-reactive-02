import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import globalstyles from '../../../const/globalStyles';

export default function UserPost({name, time, image, id, navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={globalstyles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.info}>
        <TouchableOpacity
          onPress={() => navigation.navigate('profileScreen', {id: id})}>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
        <Text>{time}</Text>
      </View>
    </View>
  );
}
