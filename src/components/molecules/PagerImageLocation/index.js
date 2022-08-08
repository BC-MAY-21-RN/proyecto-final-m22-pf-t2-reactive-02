import React from 'react';
import {View, Text} from 'react-native';
import PagerView from 'react-native-pager-view';
import ImageUpload from '../../atoms/ImageUpload';
import styles from './styles';
import UploadLocation from '../../atoms/UploadLocation';

export default function PagerImageLocation({
  changePost,
  post,
  setMapOpen,
  setIndexImage,
  setImageOpen,
  mapOpen,
}) {
  return (
    <PagerView initialPage={0} style={styles.container}>
      <View key="1">
        <Text style={styles.text}>{'Imágenes'}</Text>
        <ImageUpload
          changePost={changePost}
          setIndexImage={setIndexImage}
          setImageOpen={setImageOpen}
          post={post}
        />
      </View>
      <View key="2">
        <Text style={styles.text}>{'Ubicación'}</Text>
        <UploadLocation
          changePost={changePost}
          setMapOpen={setMapOpen}
          post={post}
          mapOpen={mapOpen}
        />
      </View>
    </PagerView>
  );
}
