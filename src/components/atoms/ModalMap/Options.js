import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';

const createUrl = coordinates => {
  return (
    'https://maps.googleapis.com/maps/api/staticmap?center=' +
    coordinates.latitude +
    ',' +
    coordinates.longitude +
    '&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C' +
    coordinates.latitude +
    ',' +
    coordinates.longitude +
    '&key=AIzaSyAuHp-FozzKYeVbQpEYjo2T-9d9M5XLFWY'
  );
};

const Options = ({changePost, changeMapOpen, init}) => {
  return (
    <View>
      {changePost ? (
        <Button
          title={'Ok'}
          buttonStyle={styles('#9485AC').btn}
          onPress={() => {
            changePost(init, 'location');
            changePost(createUrl(init), 'urlMap');
            changeMapOpen(false);
          }}
        />
      ) : null}
      <Button
        title={'Cerrar'}
        buttonStyle={styles('#FE5E5E').btn}
        onPress={() => changeMapOpen(false)}
      />
    </View>
  );
};

export default Options;
