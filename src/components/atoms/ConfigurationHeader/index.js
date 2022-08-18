import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../ProfileHeader/styles';
import styleContainer from './styles';
import Icons from '../Icons';
import * as ImagePicker from 'react-native-image-picker';
import PickImage from '../../../assets/icons/add_a_photo.svg';

export default function ConfigurationHeader({image, name, setPhoto, photo}) {
  const [chImage, setChImage] = useState(false);

  const ChangeImage = async () => {
    const result = await ImagePicker.launchImageLibrary();
    updateValue(result);
  };

  const updateValue = result => {
    if (result.didCancel) {
      console.log('nada');
    } else {
      setChImage(true);
      setPhoto(result.assets[0].uri);
    }
  };
  return (
    <View style={styleContainer.container}>
      <Image
        style={styles.image}
        source={{
          uri: chImage ? photo : image,
        }}
      />
      <View style={{...styles.changeImage, ...{backgroundColor: '#000000'}}}>
        <TouchableOpacity
          onPress={() => {
            ChangeImage();
          }}>
          <Icons IconProp={PickImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
