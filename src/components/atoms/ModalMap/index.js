import React, {useState, useEffect} from 'react';
import {Button, Overlay, View} from 'react-native-elements';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';

const newLocation = newCoordinate => {
  return {
    latitude: newCoordinate.nativeEvent.coordinate.latitude,
    longitude: newCoordinate.nativeEvent.coordinate.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
};

const createUrl = coordinates => {
  return (
    'https://maps.googleapis.com/maps/api/staticmap?center=' +
    coordinates.latitude +
    ',' +
    coordinates.longitude +
    '&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C' +
    coordinates.latitude +
    ',' +
    coordinates.longitude +
    '&key=AIzaSyAuHp-FozzKYeVbQpEYjo2T-9d9M5XLFWY'
  );
};

const Buttons = ({changeMapOpen, changePost, coordinates}) => {
  return (
    <View>
      <Button
        title={'Ok'}
        buttonStyle={styles('#9485AC').btn}
        onPress={() => {
          changePost(coordinates, 'location');
          changePost(createUrl(coordinates), 'urlMap');
        }}
      />
    </View>
  );
};

const onDragEnd = value => {
  console.log(value, 'dragEnd');
};

const onLongPress = value => {
  console.log(value, 'longPress');
};

const onRegionChange = value => {
  console.log(value, 'changeRegion');
};

export default function ModalMap({visible, setMapOpen, changePost, init}) {
  const [coordinates, setCoordinates] = useState(init);
  const changeMapOpen = value => setMapOpen(value);
  const changeCoordinates = value => setCoordinates(value);

  return (
    <Overlay isVisible={visible} onBackdropPress={() => changeMapOpen(false)}>
      <MapView
        style={styles().Mapsize}
        region={init}
        onLongPress={value => onLongPress(newLocation(value))}>
        <Marker
          draggable={true}
          coordinate={init}
          onDragEnd={value => onDragEnd(newLocation(value))}
        />
      </MapView>
      <Button
        title={'Cerrar'}
        buttonStyle={styles('#FE5E5E').btn}
        onPress={() => changeMapOpen(false)}
      />
    </Overlay>
  );
}

/*
      coordinates === {} ? post.valuesPost.location : coordinates

            coordinates === {} ? post.valuesPost.location : coordinates


        <Buttons
        coordinates={coordinates}
        changeMapOpen={changeMapOpen}
        changePost={changePost}
      />
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
      <Button
        title={'Guardar'}
        buttonStyle={styles('#9485AC').btn}
        onPress={() => {
          changeImage(createUrl(coordinates));
          changeVisible(false);
          change(coordinates, 'location');
        }}
      />
      <Button
        title={'Cancelar'}
        buttonStyle={styles('#FE5E5E').btn}
        onPress={() => changeVisible(false)}
      />
    </Overlay>
  );
*/
