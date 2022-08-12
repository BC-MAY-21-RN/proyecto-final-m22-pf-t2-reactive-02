import React from 'react';
import {View, Text} from 'react-native';
import PagerView from 'react-native-pager-view';
import ImageUpload from '../../atoms/ImageUpload';
import styles from './styles';
import UploadLocation from '../../atoms/UploadLocation';

const components = [ImageUpload, UploadLocation];

export default function PagerImageLocation({
  changePost,
  setMapOpen,
  setIndexImage,
  setImageOpen,
  values,
}) {
  return (
    <PagerView initialPage={0} style={styles.container}>
      {components.map((Component, index) => (
        <View key={index}>
          <Text style={styles.text}>
            {index === 0 ? 'Imágenes' : 'Ubicación'}
          </Text>
          <Component
            changePost={changePost}
            setIndexImage={setIndexImage}
            setImageOpen={setImageOpen}
            setMapOpen={setMapOpen}
            mapOpen={values.mapOpen}
            post={values.post}
          />
        </View>
      ))}
    </PagerView>
  );
}
