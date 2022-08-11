import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icons from '../Icons';
import * as ImagePicker from 'react-native-image-picker';
import PickImage from '../../../assets/icons/add_a_photo.svg'

export default function UserHeader({image, name}) {
  const ChangeImage = () => {
    ImagePicker.launchImageLibrary();
  };
  return (
    <View style={styles.container}>
      <View style={styles.direction}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.changeImage}>
          <TouchableOpacity onPress={ChangeImage}>
            <Icons IconProp={PickImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}


/*DB6C9E tarjeta, nombre #616060, línea #7B7B7B */
