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
    .then(() => {
      firestore()
        .collection('favoritos')
        .doc(id + auth().currentUser.uid)
        .update({['post.likes']: likes})
        .then(() => {});
    });
};

const addFavorite = (id, data) => {
  const newData = {...data, favoritos: {[auth().currentUser.uid]: true}};
  console.log(newData);
  delete newData.idDoc;
  firestore()
    .collection('favoritos')
    .doc(id + auth().currentUser.uid)
    .set({
      uidUsuario: auth().currentUser.uid,
      idPost: id,
      post: newData,
      fecha: firestore.Timestamp.fromMillis(Date.now()),
    })
    .then(_ => {})
    .catch(error => {});
};

const deleteFavorite = id => {
  firestore()
    .collection('favoritos')
    .doc(id + auth().currentUser.uid)
    .delete()
    .then(() => {});
};

const updateFavorite = (id, favorites, functionType, data) => {
  firestore()
    .collection('posts')
    .doc(id)
    .update({favoritos: favorites})
    .then(() => {
      if (functionType === 'put') {
        addFavorite(id, data);
      } else {
        firestore()
          .collection('favoritos')
          .doc(id + auth().currentUser.uid)
          .update({['post.favoritos']: favorites})
          .then(() => {
            deleteFavorite(id);
          });
      }
    });
};

const put = (data, type) => {
  const obj = {...data[type], ...{[auth().currentUser.uid]: true}};
  if (type === 'likes') {
    updateLike(data.idDoc, obj);
  } else {
    updateFavorite(data.idDoc, obj, 'put', data);
  }
};

const remove = (data, type) => {
  const obj = data[type];
  delete obj[auth().currentUser.uid];
  if (type === 'likes') {
    updateLike(data.idDoc, obj);
  } else {
    updateFavorite(data.idDoc, obj, 'remove', data);
  }
};

const buttonsFunction = (value, setValue, data, type) => {
  if (value) {
    remove(data, type);
    setValue(!value);
  } else {
    put(data, type);
    setValue(!value);
  }
};

export default function ButtonsPost({navigation, data}) {
  const [paw, setPaw] = useState(foundLikes(data));
  const [mark, setMark] = useState(foundFavorite(data));
  return (
    <View style={styles.container}>
      <Icon
        name={'paw'}
        type={'font-awesome'}
        color={paw ? '#6FCF97' : 'black'}
        onPress={() => buttonsFunction(paw, setPaw, data, 'likes')}
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
          onPress={() => buttonsFunction(mark, setMark, data, 'favoritos')}
        />
      </View>
    </View>
  );
}
