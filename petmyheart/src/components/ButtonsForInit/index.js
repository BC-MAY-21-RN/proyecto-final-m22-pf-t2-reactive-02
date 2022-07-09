import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import GoogleSVG from '../../assets/icons/google.svg';
import Icons from '../icons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const addUser = (user, navigation, nameScreen, changeLoading) => {
  firestore()
    .collection('usuarios')
    .add({
      correo: user.valuesRegister.email,
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
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.text2}>Ingresa con:</Text>
        <Icons IconProp={GoogleSVG} style={styles.google} />
      </TouchableOpacity>
    </View>
  );
}
