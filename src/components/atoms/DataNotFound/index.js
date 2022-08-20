import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

export default function DataNotFound({title, text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://res.cloudinary.com/dzdgpwtox/image/upload/w_600,c_scale/v1622293248/designer-tool-uploads/bucket_4052/1622293241335.png',
        }}
      />
      <Text style={styles.info}>{text}</Text>
    </View>
  );
}
