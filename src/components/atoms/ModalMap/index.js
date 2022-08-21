import React from 'react';
import {Overlay} from 'react-native-elements';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import Options from './Options';
import functions from './functions';

const ModalMap = ({changePost, modals, handleData}) => {
  return (
    <Overlay
      isVisible={modals.mapVisible}
      onBackdropPress={() => modals.handleMapVisible(false)}>
      <MapView
        style={styles().Mapsize}
        region={modals.dataMap}
        onLongPress={value =>
          changePost ? modals.handleLocation(functions.location(value)) : {}
        }>
        <Marker
          draggable={changePost ? true : false}
          coordinate={modals.dataMap}
          onDragEnd={value =>
            changePost ? modals.handleLocation(functions.location(value)) : {}
          }
        />
      </MapView>
      <Options
        handleMapVisible={modals.handleMapVisible}
        init={modals.dataMap}
        changePost={changePost}
        handleData={handleData}
      />
    </Overlay>
  );
};

export default ModalMap;
