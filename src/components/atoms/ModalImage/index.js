import React from 'react';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer-fixed';
import styles from './styles';
import colors from '../../../const/colors';

export default function ModalImage({modals}) {
  return (
    <Modal
      visible={modals.imgVisible}
      transparent={true}
      onRequestClose={() => modals.handleImgsVisible(false)}>
      <ImageViewer
        imageUrls={modals.urlImgs.a}
        index={modals.urlImgs.i}
        style={styles.imageViewer}
        backgroundColor={colors.black}
      />
    </Modal>
  );
}
