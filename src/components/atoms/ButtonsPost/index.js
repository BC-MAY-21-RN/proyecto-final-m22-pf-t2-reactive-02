import React, {useState} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

export default function ButtonsPost() {
  const [paw, setPaw] = useState(false);
  const onPawPress = () => setPaw(!paw);
  const [mark, setMark] = useState(false);
  const onMarkPress = () => setMark(!mark);
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Icon
          name={'paw'}
          type={'font-awesome'}
          color={paw ? '#6FCF97' : 'black'}
          onPress={onPawPress}
        />
      </View>
      <View style={styles.buttons}>
        <View style={styles.separation}>
          <Icon name={'home-sharp'} type={'ionicon'} />
        </View>
        <View style={styles.separation}>
          <Icon name={'message'} type={'material-community'} />
        </View>
        <Icon
          name={'bookmark'}
          type={'ionicon'}
          color={mark ? '#6FCF97' : 'black'}
          onPress={onMarkPress}
        />
      </View>
    </View>
  );
}
