import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import functions from './functions';

export default function UploadLocation({modals, handleData, dataForm}) {
  return (
    <View>
      <View style={styles.containerImage}>
        {dataForm.object.urlMap.length > 0 ? (
          <Image style={styles.image} source={{uri: dataForm.object.urlMap}} />
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => functions.checkPermissions(modals, handleData)}>
        <Icon name={'map-pin'} type={'feather'} size={30} />
      </TouchableOpacity>
    </View>
  );
}
