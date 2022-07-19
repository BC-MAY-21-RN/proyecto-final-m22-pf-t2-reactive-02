import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

export default function Location({city, state}) {
  return (
    <View style={styles.container}>
      <View>
        <Icon name={'location'} type={'octicon'} color={'#4FAA47'} size={30} />
      </View>
      <View style={styles.info}>
        <Text style={styles.city}>{city}</Text>
        <Text>{state}</Text>
      </View>
    </View>
  );
}
