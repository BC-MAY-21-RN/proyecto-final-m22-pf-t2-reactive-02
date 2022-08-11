import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
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

const updateLike = (id, likes) => {
  firestore()
    .collection('posts')
    .doc(id)
    .update({likes: likes})
    .then(() => {});
};

const putLike = data => {
  const likes = {...data.likes, ...{[auth().currentUser.uid]: true}};
  console.log(data.idDoc);
  updateLike(data.idDoc, likes);
};

const removeLike = data => {
  const likes = data.likes;
  delete likes[auth().currentUser.uid];
  updateLike(data.idDoc, likes);
};

const likeFunction = (paw, setPaw, data) => {
  if (paw) {
    removeLike(data);
    setPaw(!paw);
  } else {
    putLike(data);
    setPaw(!paw);
  }
};

export default function ButtonsPost({navigation, data}) {
  const [paw, setPaw] = useState(foundLikes(data));
  const [mark, setMark] = useState(foundFavorite(data));
  const onMarkPress = () => setMark(!mark);
  return (
    <View style={styles.container}>
      <Icon
        name={'paw'}
        type={'font-awesome'}
        color={paw ? '#6FCF97' : 'black'}
        onPress={() => likeFunction(paw, setPaw, data)}
      />
      <View style={styles.buttons}>
        <View style={styles.separation}>
          {foundAdoption(data) < 1 ? null : (
            <Icon
              name={'home-sharp'}
              type={'ionicon'}
              onPress={() => navigation.navigate('AdoptionForm')}
            />
          )}
        </View>
        <View style={styles.separation}>
          <TouchableOpacity onPress={() => Alert.alert('Ruta no válida')}>
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
