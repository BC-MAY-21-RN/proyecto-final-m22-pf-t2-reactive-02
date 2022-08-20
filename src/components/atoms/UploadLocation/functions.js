import {Alert} from 'react-native';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import RNLocation from 'react-native-location';

const location = (handleData, modals) => {
  RNLocation.configure({
    distanceFilter: 5.0,
    interval: 2,
  });

  const unSub = RNLocation.subscribeToLocationUpdates(async result => {
    const newLocation = {
      latitude: result[0].latitude,
      longitude: result[0].longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    };

    await handleData({['location']: newLocation});
    await modals.handleLocation(newLocation);
    await modals.handleMapVisible(true);
    unSub();
  });
};

const checkPermissions = (modals, handleData) => {
  check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    .then(locationresult => {
      check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(
        externalStorage => {
          if (
            locationresult === RESULTS.GRANTED &&
            externalStorage === RESULTS.GRANTED
          ) {
            startGPS(handleData, modals);
          } else {
            requestPermissions(handleData, modals);
          }
        },
      );
    })
    .catch(error => Alert.alert('Error', '' + error, [{text: 'OK'}]));
};

const requestPermissions = (handleData, modals) => {
  request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(locationresult2 => {
    request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(
      externalStorage2 => {
        if (
          locationresult2 === RESULTS.GRANTED &&
          externalStorage2 === RESULTS.GRANTED
        ) {
          startGPS(handleData, modals);
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

const startGPS = async (handleData, modals) => {
  RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    interval: 10000,
    fastInterval: 5000,
  }).then(() => location(handleData, modals));
};

export default {checkPermissions};
