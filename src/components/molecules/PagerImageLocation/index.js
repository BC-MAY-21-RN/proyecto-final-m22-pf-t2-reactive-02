import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import PagerView from 'react-native-pager-view';
import ImageUpload from '../../atoms/ImageUpload';
import styles from './styles';
import UploadLocation from '../../atoms/UploadLocation';

const components = [ImageUpload, UploadLocation];

export default function PagerImageLocation({modals, handleData, dataForm}) {
  return (
    <PagerView initialPage={0} style={styles.container}>
      {components.map((Component, index) => (
        <View key={index}>
          <View style={styles.row}>
            <Text style={styles.text}>
              {index === 0 ? 'Imágenes' : 'Ubicación'}
            </Text>
            <Text style={styles.text2}>Opciones {index + 1}/2</Text>
            <Icon
              name={index === 0 ? 'arrow-right' : 'arrow-left'}
              type="material-community"
              containerStyle={styles.icon}
            />
          </View>
          <Component
            modals={modals}
            handleData={handleData}
            dataForm={dataForm}
          />
        </View>
      ))}
    </PagerView>
  );
}
