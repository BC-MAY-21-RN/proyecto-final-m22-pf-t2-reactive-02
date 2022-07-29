import React from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import {Icon, Avatar} from 'react-native-elements';
import styles from './styles';

const addImage = () => {
  ImagePicker.launchImageLibrary();
};

const launchCamera = async (change, post) => {
  const result = await ImagePicker.launchCamera();
  if (result.didCancel === true) {
    Alert.alert('Se cerro la cámara', '' + 'La operación fue cerrada', [
      {text: 'OK'},
    ]);
  } else {
    const array = [...post.valuesPost.images, result.assets[0].uri];
    change(array, 'images');
  }
};

const getPermissions = (change, post) => {
  check(PERMISSIONS.ANDROID.CAMERA)
    .then(result => {
      if (result === RESULTS.GRANTED) {
        launchCamera(change, post);
      } else {
        request(PERMISSIONS.ANDROID.CAMERA)
          .then(result2 => {
            if (result2 === RESULTS.GRANTED) {
              launchCamera(change, post);
            } else {
              Alert.alert(
                'Se requieren permisos',
                '' + 'Tiene que aceptar los permisos para usar la cámara.',
                [{text: 'OK'}],
              );
            }
          })
          .catch(error => Alert.alert('Error', '' + error, [{text: 'OK'}]));
      }
    })
    .catch(error => Alert.alert('Error', '' + error, [{text: 'OK'}]));
};

export default function ImageUpload({change, post}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addImage} style={styles.button}>
        <Icon name={'image'} type={'feather'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getPermissions(change, post)}>
        <Icon name={'camera'} type={'feather'} size={30} />
      </TouchableOpacity>
      {post.valuesPost.images.map((image, index) => (
        <Avatar key={index} source={{uri: image}} />
      ))}
    </View>
  );
}
