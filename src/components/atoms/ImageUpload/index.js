import React, {useState} from 'react';
import {View, TouchableOpacity, Alert, ScrollView, Modal} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Icon, Avatar} from 'react-native-elements';
import styles from './styles';

const addImage = async (change, post) => {
  const result = await ImagePicker.launchImageLibrary();
  if (result.didCancel === true) {
    Alert.alert('Se cerro la galería', '', [{text: 'OK'}]);
  } else {
    const array = [...post.valuesPost.images, result.assets[0].uri];
    change(array, 'images');
  }
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
  const [imageOpen, setImageOpen] = useState(false);
  return (
    <View>
      <View style={styles().container}>
        <TouchableOpacity
          onPress={() => addImage(change, post)}
          style={styles().button}>
          <Icon name={'image'} type={'feather'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => getPermissions(change, post)}>
          <Icon name={'camera'} type={'feather'} size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        style={styles(post.valuesPost.images.length > 0 ? -75 : 0).scrollimage}>
        {post.valuesPost.images.map((image, index) => (
          <Avatar
            key={index}
            source={{uri: image}}
            size={80}
            containerStyle={{marginRight: 10}}
            onPress={() => setImageOpen(true)}
          />
        ))}
      </ScrollView>
      <Modal visible={imageOpen} transparent={true}>
        <ImageViewer imageUrls={post.valuesPost.images} />
      </Modal>
    </View>
  );
}
