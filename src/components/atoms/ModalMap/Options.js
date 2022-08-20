import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';
import colors from '../../../const/colors';
import helpers from '../../../utils/helpers';

export default function Options({
  changePost,
  handleMapVisible,
  init,
  handleData,
}) {
  return (
    <View>
      {changePost ? (
        <Button
          title={'Ok'}
          buttonStyle={styles('#9485AC').btn}
          onPress={() => {
            handleData({['location']: init});
            handleData({['urlMap']: helpers.createUrl(init)});
            handleMapVisible(false);
          }}
        />
      ) : null}
      <Button
        title={'Cerrar'}
        buttonStyle={styles(colors.red2).btn}
        onPress={() => handleMapVisible(false)}
      />
    </View>
  );
}
