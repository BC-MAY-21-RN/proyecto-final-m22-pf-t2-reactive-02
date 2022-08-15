import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../ProfileHeader/styles';
import styleContainer from './styles';
import Icons from '../Icons';
import InputConfiguration from '../inputConfiguration';
import * as ImagePicker from 'react-native-image-picker';
import PickImage from '../../../assets/icons/add_a_photo.svg';

export default function ConfigurationHeader({image, name}) {
  const ChangeImage = () => {
    ImagePicker.launchImageLibrary();
  };
  return (
    <View style={styleContainer.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={{...styles.changeImage, ...{backgroundColor: '#000000'},}}>
        <TouchableOpacity onPress={ChangeImage}>
          <Icons IconProp={PickImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
