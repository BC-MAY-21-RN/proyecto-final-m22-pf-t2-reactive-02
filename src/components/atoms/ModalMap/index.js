// Cambiar coordenadas
import React from 'react';
import {Overlay} from 'react-native-elements';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import Options from './Options';

const location = newCoordinate => {
  return {
    latitude: newCoordinate.nativeEvent.coordinate.latitude,
    longitude: newCoordinate.nativeEvent.coordinate.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
};

const ModalMap = ({visible, setMapOpen, changePost, init}) => {
  const changeMapOpen = value => setMapOpen(value);
  return (
    <Overlay isVisible={visible} onBackdropPress={() => changeMapOpen(false)}>
      <MapView
        style={styles().Mapsize}
        region={init}
        onLongPress={value => changePost(location(value), 'location')}>
        <Marker
          draggable={true}
          coordinate={init}
          onDragEnd={value => changePost(location(value), 'location')}
        />
      </MapView>
      <Options
        changeMapOpen={changeMapOpen}
        init={init}
        changePost={changePost}
      />
    </Overlay>
  );
};

export default ModalMap;
