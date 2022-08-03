import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {Icon} from 'react-native-elements';
import ModalMap from '../ModalMap';
import styles from './styles';

const LocationPermissions = changeModalVisible => {
  check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    .then(result => {
      if (result === RESULTS.GRANTED) {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        }).then(() => changeModalVisible(true));
      } else {
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
          .then(result2 => {
            if (result2 === RESULTS.GRANTED) {
              RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
                interval: 10000,
                fastInterval: 5000,
              }).then(() => changeModalVisible(true));
            } else {
              Alert.alert(
                'Se requieren permisos',
                '' + 'Tienes que aceptar los permisos para usar esta función.',
                [{text: 'OK'}],
              );
            }
          })
          .catch(error => Alert.alert('Error', '' + error, [{text: 'OK'}]));
      }
    })
    .catch(error => Alert.alert('Error', '' + error, [{text: 'OK'}]));
};

export default function UploadLocation({}) {
  const [modalVisible, setModalVisible] = useState(false);
  const changeModalVisible = value => setModalVisible(value);

  return (
    <View>
      <ModalMap visible={modalVisible} changeVisible={changeModalVisible} />
      <View style={styles.containerImage}>
        <Text style={{alignSelf: 'center'}}>Mapa</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => LocationPermissions(changeModalVisible)}>
        <Icon name={'map-pin'} type={'feather'} size={30} />
      </TouchableOpacity>
    </View>
  );
}
