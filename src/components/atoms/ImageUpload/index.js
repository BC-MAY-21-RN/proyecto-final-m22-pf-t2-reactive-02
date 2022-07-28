import React from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import {Icon} from 'react-native-elements';
import styles from './styles';

const addImage = () => {
  ImagePicker.launchImageLibrary();
};

const launchCamera = () => {
  ImagePicker.launchCamera();
};

const getPermissions = () => {
  check(PERMISSIONS.ANDROID.CAMERA)
    .then(result => {
      if (result === RESULTS.GRANTED) {
        launchCamera();
      } else {
        request(PERMISSIONS.ANDROID.CAMERA)
          .then(result2 => {
            if (result2 === RESULTS.GRANTED) {
              launchCamera();
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

export default function ImageUpload() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addImage} style={styles.button}>
        <Icon name={'image'} type={'feather'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={getPermissions}>
        <Icon name={'camera'} type={'feather'} size={30} />
      </TouchableOpacity>
    </View>
  );
}
