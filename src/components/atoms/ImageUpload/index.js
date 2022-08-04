import React from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import {Icon, Avatar} from 'react-native-elements';
import styles from './styles';

const addImage = async (change, post) => {
  const result = await ImagePicker.launchImageLibrary();
  setImage(result, change, post);
};

const setImage = (result, change, post) => {
  if (result.didCancel === true) {
    Alert.alert('Error al cargar la imagen', '', [{text: 'OK'}]);
  } else {
    const array = [...post.valuesPost.images, {url: result.assets[0].uri}];
    change(array, 'images');
  }
};

const launchCamera = async (change, post) => {
  const result = await ImagePicker.launchCamera();
  setImage(result, change, post);
};

const getPermissions = (change, post) => {
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
};

const checkPermissions = (change, post) => {
  check(PERMISSIONS.ANDROID.CAMERA)
    .then(result => {
      if (result === RESULTS.GRANTED) {
        launchCamera(change, post);
      } else {
        getPermissions(change, post);
      }
    })
    .catch(error => Alert.alert('Error', '' + error, [{text: 'OK'}]));
};

const deleteImage = (change, post, index) => {
  Alert.alert('Eliminar imagen', '¿Quiere eliminar esta imagen?', [
    {
      text: 'Eliminar',
      onPress: () => {
        const array = post.valuesPost.images;
        change(
          array.filter((_, i) => i !== index),
          'images',
        );
      },
    },
    {text: 'Cancelar', style: 'cancel'},
  ]);
};

export default function ImageUpload({
  change,
  post,
  changeIndex,
  changeVisible,
}) {
  return (
    <View>
      <View style={styles().container}>
        <TouchableOpacity
          onPress={() => addImage(change, post)}
          style={styles().button}>
          <Icon name={'image'} type={'feather'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => checkPermissions(change, post)}>
          <Icon name={'camera'} type={'feather'} size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        style={
          styles(
            post.valuesPost.images.length > 0
              ? 0
              : Dimensions.get('screen').height > 740
              ? 120
              : 80,
          ).scrollimage
        }>
        {post.valuesPost.images.map((image, index) => (
          <Avatar
            key={index}
            source={{uri: image.url}}
            size={Dimensions.get('screen').height > 740 ? 120 : 80}
            containerStyle={styles().imagecontainer}
            onPress={() => {
              changeVisible(true);
              changeIndex(index);
            }}
            onLongPress={() => deleteImage(change, post, index)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
