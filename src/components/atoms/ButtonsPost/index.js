import React, {useState} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

export default function ButtonsPost({navigation}) {
  const [paw, setPaw] = useState(false);
  const onPawPress = () => setPaw(!paw);
  const [mark, setMark] = useState(false);
  const onMarkPress = () => setMark(!mark);
  const [comment, setComment] = useState(false);
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
          {true ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AdoptionForm');
              }}>
              <Icon name={'home-sharp'} type={'ionicon'} />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.separation}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Comments');
            }}>
            <Icon name={'message'} type={'material-community'} />
          </TouchableOpacity>
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
