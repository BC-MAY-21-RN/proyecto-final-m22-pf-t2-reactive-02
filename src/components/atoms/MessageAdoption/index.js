import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

export default function MessageAdoption() {
  return (
    <View>
      <Text style={styles.text}>¡No hay nada por aqui!</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://res.cloudinary.com/dzdgpwtox/image/upload/w_600,c_scale/v1622293248/designer-tool-uploads/bucket_4052/1622293241335.png',
        }}
      />
      <Text style={styles.info}>
        Aqui aparecerán las respuestas a tus formularios de adopción
      </Text>
    </View>
  );
}
