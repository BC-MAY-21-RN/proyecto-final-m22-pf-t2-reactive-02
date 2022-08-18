import React, {useState} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import values from '../../../const/hashtags';

const foundFavorite = data => {
  return data.favoritos[auth().currentUser.uid];
};

const foundLikes = data => {
  return data.likes[auth().currentUser.uid];
};

const foundAdoption = data => {
  const hashtags = data.hashtags;
  let contador = 0;
  values.adoption.map(element => {
    if (hashtags.indexOf(element) >= 0) {
      contador++;
    }
  });
  return contador;
};

export default function ButtonsPost({navigation, data}) {
  const [paw, setPaw] = useState(foundLikes(data));
  const onPawPress = () => setPaw(!paw);
  const [mark, setMark] = useState(foundFavorite(data));
  const onMarkPress = () => setMark(!mark);
  return (
    <View style={styles.container}>
      <Icon
        name={'paw'}
        type={'font-awesome'}
        color={paw ? '#6FCF97' : 'black'}
        onPress={onPawPress}
      />
      <View style={styles.buttons}>
        <View style={styles.separation}>
          {foundAdoption(data) > 0 ? (
            <Icon
              name={'home-sharp'}
              type={'ionicon'}
              onPress={() => {
                navigation.navigate('AdoptionForm', {data: data});
              }}
            />
          ) : null}
        </View>
        <View style={styles.separation}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Comments', {data: data});
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
