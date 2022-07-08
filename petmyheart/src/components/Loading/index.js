import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Overlay} from 'react-native-elements';
import styles from './styles';

export default function Loading({isvisible}) {
  return (
    <Overlay isVisible={isvisible} onBackdropPress={null}>
      <View style={styles.overlayContainer}>
        <ActivityIndicator size="large" color="#DB6C9E" />
      </View>
    </Overlay>
  );
}
