import React, {useState} from 'react';
import {View, TouchableOpacity, Alert, Image} from 'react-native';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {Icon} from 'react-native-elements';
import ModalMap from '../ModalMap';
import styles from './styles';

const checkPermissions = changeModalVisible => {
  check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    .then(location => {
      check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(
        externalStorage => {
          if (
            location === RESULTS.GRANTED &&
            externalStorage === RESULTS.GRANTED
          ) {
            startGPS(changeModalVisible);
          } else {
            requestPermissions(changeModalVisible);
          }
        },
      );
    })
    .catch(error => Alert.alert('Error', '' + error, [{text: 'OK'}]));
};

const requestPermissions = changeModalVisible => {
  request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(location2 => {
    request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(
      externalStorage2 => {
        if (
          location2 === RESULTS.GRANTED &&
          externalStorage2 === RESULTS.GRANTED
        ) {
          startGPS(changeModalVisible);
        } else {
          Alert.alert(
            'Se requieren permisos',
            '' + 'Tienes que aceptar los permisos para usar esta función.',
            [{text: 'OK'}],
          );
        }
      },
    );
  });
};

const startGPS = changeModalVisible => {
  RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    interval: 10000,
    fastInterval: 5000,
  }).then(() => changeModalVisible(true));
};

export default function UploadLocation({}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
  const changeModalVisible = value => setModalVisible(value);
  const changeImage = value => setImage(value);

  return (
    <View>
      <ModalMap
        visible={modalVisible}
        changeVisible={changeModalVisible}
        changeImage={changeImage}
      />
      <View style={styles.containerImage}>
        {image.length > 0 ? (
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => checkPermissions(changeModalVisible)}>
        <Icon name={'map-pin'} type={'feather'} size={30} />
      </TouchableOpacity>
    </View>
  );
}
