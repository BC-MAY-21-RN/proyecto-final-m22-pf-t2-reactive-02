import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Icon} from 'react-native-elements';
import styles from './styles';

const addImage = () => {
  ImagePicker.launchImageLibrary();
};

const launchCamera = () => {
  ImagePicker.launchCamera();
};

export default function ImageUpload() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addImage} style={styles.button}>
        <Icon name={'image'} type={'feather'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={launchCamera}>
        <Icon name={'camera'} type={'feather'} size={30} />
      </TouchableOpacity>
    </View>
  );
}
