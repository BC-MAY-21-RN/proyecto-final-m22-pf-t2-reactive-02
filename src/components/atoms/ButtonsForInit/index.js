import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import GoogleSVG from '../../../assets/icons/google.svg';
import Icons from '../Icons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const addUser = (user, changeLoading) => {
  firestore()
    .collection('usuarios')
    .add({
      correo: user.valuesRegister.email,
      nombre: user.valuesRegister.name,
      uid: auth().currentUser.uid,
    })
    .then(() => {
      changeLoading(false);
    });
};

const registerEmailUser = (user, changeLoading) => {
  auth()
    .createUserWithEmailAndPassword(
      user.valuesRegister.email,
      user.valuesRegister.password,
    )
    .then(() => {
      addUser(user, changeLoading);
    })
    .catch(error => {
      changeLoading(false);
    });
};

const validateData = (user, changeAlerts, changeLoading) => {
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
  changeAlerts(list);

  if (list.includes(true)) {
    changeLoading(false);
  } else {
    changeLoading(true);
    registerEmailUser(user, changeLoading);
  }
};

async function onGoogleButtonPress(changeLoading) {
  changeLoading(true);
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}

const validateDataGoogle = changeLoading => {
  const uid = auth().currentUser.uid;
  const user = {
    valuesRegister: {
      name: auth().currentUser.displayName,
      email: auth().currentUser.email,
    },
  };
  const db = firestore();
  db.collection('usuarios')
    .where('uid', '==', uid)
    .get()
    .then(querySnapshot => {
      if (querySnapshot.size === 0) {
        addUser(user, changeLoading);
      }
    });
};

const loginAccount = (email, password, changeLoading) => {
  changeLoading(true);
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      changeLoading(false);
    })
    .catch(error => {
      changeLoading(false);
    });
};

export default function ButtonsForInit({user, changeAlerts, changeLoading}) {
  return (
    <View>
      <TouchableOpacity
        disabled={!user?.getBool()}
        style={{
          ...styles.button1,
          ...(user?.getBool() ? {} : {backgroundColor: '#B09AAC'}),
        }}
        onPress={() =>
          changeAlerts === undefined
            ? loginAccount(
                user.valuesLogin.email,
                user.valuesLogin.password,
                changeLoading,
              )
            : validateData(user, changeAlerts, changeLoading)
        }>
        <Text style={styles.text1}>
          {' '}
          {changeAlerts === undefined ? 'INICIAR SESIÓN' : 'CREAR CUENTA'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!user?.getBoolGoogle()}
        style={{
          ...styles.button2,
          ...(user?.getBoolGoogle() ? {} : {borderColor: '#B09AAC'}),
        }}
        onPress={() => {
          onGoogleButtonPress(changeLoading)
            .then(() => validateDataGoogle(changeLoading))
            .catch(() => changeLoading(false));
        }}>
        <Text
          style={{
            ...styles.text2,
            ...(user?.getBoolGoogle() ? {} : {color: '#B09AAC'}),
          }}>
          Ingresa con:
        </Text>
        <Icons IconProp={GoogleSVG} style={styles.google} />
      </TouchableOpacity>
    </View>
  );
}
