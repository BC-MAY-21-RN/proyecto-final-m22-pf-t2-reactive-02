import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

export default function Post() {
  const [paw, setPaw] = useState(false);
  const onPawPress = () => setPaw(!paw);
  const [message, setMessage] = useState(false);
  const onMessagePress = () => setMessage(!message);
  const [mark, setMark] = useState(false);
  const onMarkPress = () => setMark(!mark);
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Icon
          name={'paw'}
          type={'font-awesome'}
          color={paw ? 'green' : 'black'}
          onPress={onPawPress}
        />
      </View>
      <View style={styles.buttons}>
        <View style={styles.separation}>
          <Icon
            name={'message'}
            type={'material-community'}
            color={message ? 'green' : 'black'}
            onPress={onMessagePress}
          />
        </View>
        <Icon
          name={'bookmark'}
          type={'ionicon'}
          color={mark ? 'green' : 'black'}
          onPress={onMarkPress}
        />
      </View>
    </View>
  );
}
