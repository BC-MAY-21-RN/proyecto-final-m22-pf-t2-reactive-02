import React from 'react';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer-fixed';
import styles from './styles';

export default function ModalImage({changeVisible, values}) {
  return (
    <Modal
      visible={values.v}
      transparent={true}
      onRequestClose={() => changeVisible(false)}>
      <ImageViewer
        imageUrls={values.a}
        index={values.i}
        style={styles.imageViewer}
        backgroundColor={'#000'}
      />
    </Modal>
  );
}
