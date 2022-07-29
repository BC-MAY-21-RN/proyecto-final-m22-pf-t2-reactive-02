import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';

export default function UserProfileInfo({image, name}) {
  const ChangeImage = () => {
    ImagePicker.launchImageLibrary();
  };
  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.changeImage}>
        <TouchableOpacity onPress={ChangeImage}>
          <Icon name={'upload'} type={'feather'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
