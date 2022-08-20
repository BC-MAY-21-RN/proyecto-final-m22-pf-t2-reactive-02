import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import InputConfiguration from '../../atoms/inputConfiguration';
import PhoneSVG from '../../../assets/icons/phone.svg';
import LocationPinSVG from '../../../assets/icons/location_pin.svg';
import EditSVG from '../../../assets/icons/create.svg';
import AddSVG from '../../../assets/icons/arrow.svg';
import firestore from '@react-native-firebase/firestore';
import userIcon from '../../../assets/icons/Vector.svg';
import {firebase} from '@react-native-firebase/auth';

const getIdDocument = (id, named, number, ciudad, photo, setAuthUpdate) => {
  firestore()
    .collection('usuarios')
    .where('uid', '==', id)
    .get()
    .then(querySnapshot => {
      const id = querySnapshot.forEach(documentSnapshot => {
        update(documentSnapshot.ref.id, named, number, ciudad, photo);
        updateAuth(named, number, ciudad, photo, setAuthUpdate);
      });
    });
};
const update = (id, name, number, ciudad, photo) => {
  firestore()
    .collection('usuarios')
    .doc(id)
    .update({
      nombre: name,
      phoneNumber: number,
      ciudad: ciudad,
      imagenurl: photo,
    })
    .then(() => {
      Alert.alert('Tus datos se han actualizado correctamente!');
    });
};

const updateAuth = async (name, number, ciudad, photo) => {
  const updateData = {
    displayName: name,
    phoneNumber: number,
    ciudad: ciudad,
    photoURL: photo,
  };

  await firebase.auth().currentUser.updateProfile(updateData);
};

export default function ConfigurationContent({photo, name, setName}) {
  const user = auth().currentUser;

  const [number, setNumber] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [named, setNamed] = useState('');

  return (
    <View style={styles.container}>
      <InputConfiguration
        title={user.displayName}
        Icon={userIcon}
        visibleIcon={true}
        ChangeIcon={AddSVG}
        changeUser={setNamed}
        input={name}
      />
      <InputConfiguration
        title={'number'}
        Icon={PhoneSVG}
        visibleIcon={true}
        ChangeIcon={EditSVG}
        changeUser={setNumber}
        input={number}
      />
      <InputConfiguration
        title={'city'}
        Icon={LocationPinSVG}
        visibleIcon={true}
        ChangeIcon={EditSVG}
        changeUser={setCiudad}
        input={ciudad}
      />

      <TouchableOpacity
        style={styles.guardar}
        onPress={() => {
          getIdDocument(user.uid, named, number, ciudad, photo);
          setName(named);
        }}>
        <Text>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
