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

const addImage = async (handleData, dataForm) => {
  const result = await ImagePicker.launchImageLibrary();
  setImage(result, handleData, dataForm);
};

const setImage = (result, handleData, dataForm) => {
  if (result.didCancel === true) {
    Alert.alert('Error al cargar la imagen', '', [{text: 'OK'}]);
  } else {
    const array = [...dataForm.object.images, {url: result.assets[0].uri}];
    handleData({['images']: array});
  }
};

const launchCamera = async (handleData, dataForm) => {
  const result = await ImagePicker.launchCamera();
  setImage(result, handleData, dataForm);
};

const getPermissions = (handleData, dataForm) => {
  request(PERMISSIONS.ANDROID.CAMERA)
    .then(result2 => {
      if (result2 === RESULTS.GRANTED) {
        launchCamera(handleData, dataForm);
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

const checkPermissions = (handleData, dataForm) => {
  check(PERMISSIONS.ANDROID.CAMERA)
    .then(result => {
      if (result === RESULTS.GRANTED) {
        launchCamera(handleData, dataForm);
      } else {
        getPermissions(handleData, dataForm);
      }
    })
    .catch(error => Alert.alert('Error', '' + error, [{text: 'OK'}]));
};

const deleteImage = (handleData, dataForm, index) => {
  Alert.alert('Eliminar imagen', '¿Quiere eliminar esta imagen?', [
    {
      text: 'Eliminar',
      onPress: () => {
        const array = dataForm.object.images;
        handleData({['images']: array.filter((_, i) => i !== index)});
      },
    },
    {text: 'Cancelar', style: 'cancel'},
  ]);
};

const styleScroll = dataForm => {
  return styles(
    dataForm.object.images.length > 0
      ? 0
      : Dimensions.get('screen').height > 740
      ? 120
      : 80,
  ).scrollimage;
};

const openImage = (modals, dataForm, index) => {
  const jsonImages = {i: index, a: dataForm.object.images};
  modals.handleUrlImgs(jsonImages);
  modals.handleImgsVisible(true);
};

export default function ImageUpload({modals, handleData, dataForm}) {
  return (
    <View>
      <View style={styles().container}>
        <TouchableOpacity
          onPress={() => addImage(handleData, dataForm)}
          style={styles().button}>
          <Icon name={'image'} type={'feather'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => checkPermissions(handleData, dataForm)}>
          <Icon name={'camera'} type={'feather'} size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styleScroll(dataForm)}>
        {dataForm.object.images.map((image, index) => (
          <Avatar
            key={index}
            source={{uri: image.url}}
            size={Dimensions.get('screen').height > 740 ? 120 : 80}
            containerStyle={styles().imagecontainer}
            onPress={() => openImage(modals, dataForm, index)}
            onLongPress={() => deleteImage(handleData, dataForm, index)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
