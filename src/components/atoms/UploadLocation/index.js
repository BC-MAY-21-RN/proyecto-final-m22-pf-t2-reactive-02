import React, {useState} from 'react';
import {View, TouchableOpacity, Alert, Image} from 'react-native';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import RNLocation from 'react-native-location';
import {Icon} from 'react-native-elements';
import ModalMap from '../ModalMap';
import styles from './styles';

const location = (changePost, changeModalVisible) => {
  RNLocation.configure({
    distanceFilter: 5.0,
    interval: 2,
  });

  const unSub = RNLocation.subscribeToLocationUpdates(async result => {
    await changePost(
      {
        latitude: result[0].latitude,
        longitude: result[0].longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      },
      'location',
    );
    await changeModalVisible(true);
    unSub();
  });
};

const checkPermissions = (changeModalVisible, changePost, sub, setSub) => {
  check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    .then(locationresult => {
      check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(
        externalStorage => {
          if (
            locationresult === RESULTS.GRANTED &&
            externalStorage === RESULTS.GRANTED
          ) {
            startGPS(changePost, changeModalVisible, sub, setSub);
          } else {
            requestPermissions(changePost, changeModalVisible, sub, setSub);
          }
        },
      );
    })
    .catch(error => Alert.alert('Error', '' + error, [{text: 'OK'}]));
};

const requestPermissions = (changePost, changeModalVisible, sub, setSub) => {
  request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(locationresult2 => {
    request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(
      externalStorage2 => {
        if (
          locationresult2 === RESULTS.GRANTED &&
          externalStorage2 === RESULTS.GRANTED
        ) {
          startGPS(changePost, changeModalVisible, sub, setSub);
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

const startGPS = async (changePost, changeModalVisible, sub, setSub) => {
  RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    interval: 10000,
    fastInterval: 5000,
  }).then(() => location(changePost, changeModalVisible));
};

export default function UploadLocation({
  changePost,
  setMapOpen,
  post,
  mapOpen,
}) {
  const [sub, setSub] = useState(() => {});
  const changeModalVisible = value => setMapOpen(value);
  return (
    <View>
      <ModalMap
        visible={mapOpen}
        changePost={changePost}
        setMapOpen={setMapOpen}
        init={post.valuesPost.location}
        post={post}
      />
      <View style={styles.containerImage}>
        {post.valuesPost.urlMap.length > 0 ? (
          <Image style={styles.image} source={{uri: post.valuesPost.urlMap}} />
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          checkPermissions(changeModalVisible, changePost, sub, setSub)
        }>
        <Icon name={'map-pin'} type={'feather'} size={30} />
      </TouchableOpacity>
    </View>
  );
}
