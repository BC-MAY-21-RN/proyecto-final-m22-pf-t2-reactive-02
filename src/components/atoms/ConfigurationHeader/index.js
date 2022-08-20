import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import Icons from '../Icons';
import * as ImagePicker from 'react-native-image-picker';
import PickImage from '../../../assets/icons/add_a_photo.svg';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

export default function ConfigurationHeader({image, name, setPhoto, photo}) {
  const [chImage, setChImage] = useState(false);

  const ChangeImage = async () => {
    const result = await ImagePicker.launchImageLibrary();
    updateValue(result);
  };

  const updateValue = result => {
    if (result.didCancel) {
      Alert.alert('No seleccionaste ninguna imagen');
    } else {
      setChImage(true);
      uploadImg(result.assets[0].uri);
    }
  };

  const uploadImg = async i => {
    const url = i;
    const nameImage = url.substring(url.lastIndexOf('/') + 1);
    const reference = storage().ref(auth().currentUser.uid + '/' + nameImage);
    await reference.putFile(url);
    await reference.getDownloadURL().then(urlFirebase => {
      const urlDs = {url: urlFirebase};
      setPhoto(urlDs.url);
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: chImage ? photo : image,
        }}
      />
      <View style={{...styles.changeImage, ...{backgroundColor: '#979797'}}}>
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
