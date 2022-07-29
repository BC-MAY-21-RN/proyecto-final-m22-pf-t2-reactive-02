import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function UserProfileInfo({publications, likes, saved}) {
  return (
    <View style={styles.container}>
      <View style={styles.space}>
        <Text style={styles.info}>{publications}</Text>
        <Text style={styles.title}>Publicaciones</Text>
      </View>
      <View style={styles.space}>
        <Text style={styles.info}>{likes}</Text>
        <Text style={styles.title}>Me gusta</Text>
      </View>
      <View>
        <Text style={styles.info}>{saved}</Text>
        <Text style={styles.title}>Guardados</Text>
      </View>
    </View>
  );
}
