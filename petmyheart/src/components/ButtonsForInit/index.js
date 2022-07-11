import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import GoogleSVG from '../../assets/icons/google.svg';
import Icons from '../icons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

async function onGoogleButtonPress(navigation, changeLoading) {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  const name = auth().currentUser.displayName;
  const user = {valuesRegister: {name: name}};
  const nameScreen = 'Home';
  validateDataGoogle(user, navigation, nameScreen, changeLoading);
  return auth().signInWithCredential(googleCredential);
}

const validateDataGoogle = (user, navigation, nameScreen, changeLoading) => {
  const uid = auth().currentUser.uid;
  const db = firestore();
  db.collection('usuarios')
    .where('uid', '==', uid)
    .get()
    .then(querySnapshot => {
      if (querySnapshot.size === 0) {
        addUser(user, navigation, nameScreen, changeLoading);
      }
    });
};

const addUser = (user, navigation, nameScreen, changeLoading) => {
  firestore()
    .collection('usuarios')
    .add({
      correo: auth().currentUser.email,
      nombre: user.valuesRegister.name,
      uid: auth().currentUser.uid,
    })
    .then(() => {
      changeLoading(false);
      navigation.navigate(nameScreen);
    });
};

const validateData = (
  user,
  changeUser,
  navigation,
  nameScreen,
  changeLoading,
) => {
  const list = [false, false, false, false];
  const inputs = [
    {fun: user.validateName(user)},
    {fun: user.validateEmail(user)},
    {fun: user.validatePassword(user)},
    {fun: user.validatePassword2(user)},
  ];

  inputs.forEach((item, index) => {
    list[index] = item.fun;
  });

  changeUser(list, 'alert');

  if (list.includes(true)) {
    changeLoading(false);
  } else {
    changeLoading(true);
    registerEmailUser(user, navigation, nameScreen, changeLoading);
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }
};

const registerEmailUser = (user, navigation, nameScreen, changeLoading) => {
  auth()
    .createUserWithEmailAndPassword(
      user.valuesRegister.email,
      user.valuesRegister.password,
    )
    .then(() => {
      addUser(user, navigation, nameScreen, changeLoading);
    })
    .catch(error => {
      changeLoading(false);
    });
};

export default function ButtonsForInit({
  isActive,
  navigation,
  nameScreen,
  user,
  changeUser,
  changeLoading,
}) {
  return (
    <View>
      <TouchableOpacity
        disabled={isActive}
        style={styles.button1}
        onPress={() =>
          validateData(user, changeUser, navigation, nameScreen, changeLoading)
        }>
        <Text style={styles.text1}>CREAR CUENTA</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() =>
          onGoogleButtonPress(navigation, changeLoading).then(() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            });
          })
        }>
        <Text style={styles.text2}>Ingresa con:</Text>
        <Icons IconProp={GoogleSVG} style={styles.google} />
      </TouchableOpacity>
    </View>
  );
}
