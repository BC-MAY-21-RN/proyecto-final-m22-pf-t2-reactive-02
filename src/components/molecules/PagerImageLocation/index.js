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
import {Button, Overlay} from 'react-native-elements';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import PagerView from 'react-native-pager-view';
import RNLocation from 'react-native-location';
import ImageUpload from '../../atoms/ImageUpload';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import {Icon} from 'react-native-elements';

const location = (visible, changeCoordinates) => {
  if (visible === true) {
    RNLocation.configure({
      distanceFilter: 5.0,
      interval: 2000,
    });

    const unsubscriber = RNLocation.subscribeToLocationUpdates(result => {
      changeCoordinates({
        latitude: result[0].latitude,
        longitude: result[0].longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      });
    });
    return unsubscriber;
  }
};

const initLocation = {
  latitude: 19.123197,
  longitude: -104.349663,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const ModalMap = ({visible, changeVisible}) => {
  const [coordinates, setCoordinates] = useState(initLocation);
  const changeCoordinates = value => setCoordinates(value);

  useEffect(() => {
    location(visible, changeCoordinates);
  }, [visible]);

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={() => {
        changeVisible(false);
      }}>
      <MapView
        moveOnMarkerPress={true}
        style={{width: 300, height: 400}}
        region={coordinates}
        onLongPress={a =>
          setCoordinates({
            latitude: a.nativeEvent.coordinate.latitude,
            longitude: a.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          })
        }
        onRegionChange={() => changeCoordinates(coordinates)}
        onRegionChangeComplete={() => changeCoordinates(coordinates)}>
        <Marker
          draggable={true}
          coordinate={coordinates}
          onDragEnd={newCoordinate =>
            setCoordinates({
              latitude: newCoordinate.nativeEvent.coordinate.latitude,
              longitude: newCoordinate.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            })
          }
        />
      </MapView>
      <Button title={'Seleccionar coordenada'} buttonStyle={{marginTop: 10, backgroundColor: '#9485AC'}} />
      <Button title={'Cancelar'} buttonStyle={{marginTop: 10, backgroundColor: '#FE5E5E'}} />
    </Overlay>
  );
};

/*
      <Text>
        {'latitud: ' + coordinates[0] + ' | longitud: ' + coordinates[1]}
      </Text>
*/

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
