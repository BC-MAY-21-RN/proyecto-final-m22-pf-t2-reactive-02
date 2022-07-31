import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  Dimensions,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import PagerView from 'react-native-pager-view';
import RNLocation from 'react-native-location';
import ImageUpload from '../../atoms/ImageUpload';
import styles from './styles';

import {Icon} from 'react-native-elements';

const ModalMap = ({visible, changeVisible}) => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    if (visible === true) {
      RNLocation.configure({
        distanceFilter: 5.0,
        interval: 2000,
      });

      const unsubscriber = RNLocation.subscribeToLocationUpdates(result => {
        console.log(result);
        setCoordinates([result[0].latitude, result[0].longitude]);
      });

      return unsubscriber;
    }
  });

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={() => {
        changeVisible(false);
      }}>
      <Text>
        {'latitud: ' + coordinates[0] + ' | longitud: ' + coordinates[1]}
      </Text>
    </Overlay>
  );
};

const LocationPermissions = changeModalVisible => {
  check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    .then(result => {
      if (result === RESULTS.GRANTED) {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        })
          .then(() => changeModalVisible(true))
          .catch();
      } else {
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
          .then(result2 => {
            if (result2 === RESULTS.GRANTED) {
              RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
                interval: 10000,
                fastInterval: 5000,
              })
                .then(() => changeModalVisible(true))
                .catch();
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

const UploadLocation = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const changeModalVisible = value => setModalVisible(value);
  return (
    <View>
      <ModalMap visible={modalVisible} changeVisible={changeModalVisible} />
      <View
        style={{
          height: 200,
          width: Dimensions.get('screen').width - 20,
          backgroundColor: '#fff',
          alignSelf: 'center',
          marginTop: 25,
        }}>
        <Text style={{alignSelf: 'center'}}>Mapa</Text>
      </View>
      <TouchableOpacity
        style={{position: 'absolute', left: 15, top: 30}}
        onPress={() => LocationPermissions(changeModalVisible)}>
        <Icon name={'map-pin'} type={'feather'} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default function PagerImageLocation({
  change,
  changeIndex,
  changeVisible,
  post,
}) {
  return (
    <PagerView initialPage={0} style={styles.container}>
      <View key="1">
        <Text style={styles.text}>{'Imágenes'}</Text>
        <ImageUpload
          change={change}
          changeIndex={changeIndex}
          changeVisible={changeVisible}
          post={post}
        />
      </View>
      <View key="2">
        <Text style={styles.text}>{'Ubicación'}</Text>
        <UploadLocation />
      </View>
    </PagerView>
  );
}
