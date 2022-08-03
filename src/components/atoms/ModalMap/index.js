import React, {useState, useEffect} from 'react';
import {Button, Overlay} from 'react-native-elements';
import MapView, {Marker} from 'react-native-maps';
import RNLocation from 'react-native-location';
import styles from './styles';

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

const initLocation = () => {
  return {
    latitude: 19.123197,
    longitude: -104.349663,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
};

const newLocation = newCoordinate => {
  return {
    latitude: newCoordinate.nativeEvent.coordinate.latitude,
    longitude: newCoordinate.nativeEvent.coordinate.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
};

export default function ModalMap({visible, changeVisible}) {
  const [coordinates, setCoordinates] = useState(initLocation());
  const changeCoordinates = value => setCoordinates(value);
  useEffect(() => {
    location(visible, changeCoordinates);
  }, [visible]);

  return (
    <Overlay isVisible={visible} onBackdropPress={() => changeVisible(false)}>
      <MapView
        style={styles().Mapsize}
        region={coordinates}
        onLongPress={value => setCoordinates(newLocation(value))}
        onRegionChangeComplete={() => changeCoordinates(coordinates)}>
        <Marker
          draggable={true}
          coordinate={coordinates}
          onDragEnd={value => setCoordinates(newLocation(value))}
        />
      </MapView>
      <Button title={'Guardar'} buttonStyle={styles('#9485AC').btn} />
      <Button title={'Cancelar'} buttonStyle={styles('#FE5E5E').btn} />
    </Overlay>
  );
}
