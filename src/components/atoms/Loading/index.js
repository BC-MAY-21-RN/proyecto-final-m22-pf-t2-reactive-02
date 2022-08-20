import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Overlay} from 'react-native-elements';
import styles from './styles';
import colors from '../../../const/colors';

export default function Loading({isVisible}) {
  return (
    <Overlay isVisible={isVisible} onBackdropPress={null}>
      <View style={styles.overlayContainer}>
        <ActivityIndicator size="large" color={colors.pink} />
      </View>
    </Overlay>
  );
}
