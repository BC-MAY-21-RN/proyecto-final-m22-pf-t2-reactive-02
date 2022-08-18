import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import InputConfiguration from '../../atoms/inputConfiguration';
import PhoneSVG from '../../../assets/icons/phone.svg';
import LocationPinSVG from '../../../assets/icons/location_pin.svg';
import LocationSVG from '../../../assets/icons/location.svg';
import EditSVG from '../../../assets/icons/create.svg';
import AddSVG from '../../../assets/icons/arrow.svg';
import firestore from '@react-native-firebase/firestore';
import userIcon from '../../../assets/icons/Vector.svg';

const getIdDocument = (id, name, number, ciudad, photo) => {
  firestore()
    .collection('usuarios')
    .where('uid', '==', id)
    .get()
    .then(querySnapshot => {
      const id = querySnapshot.forEach(documentSnapshot =>
        update(documentSnapshot.ref.id, name, number, ciudad, photo),
      );
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

export default function ConfigurationContent({photo}) {
  const user = auth().currentUser;

  const [name, setName] = useState(user.displayName);
  const [number, setNumber] = useState(user.phoneNumber);
  const [ciudad, setCiudad] = useState('');

  return (
    <View style={styles.container}>
      <InputConfiguration
        title={user.displayName}
        Icon={userIcon}
        visibleIcon={true}
        ChangeIcon={AddSVG}
        changeUser={setName}
        input={name}
      />
      <InputConfiguration
        title={'+52'}
        Icon={PhoneSVG}
        visibleIcon={true}
        ChangeIcon={EditSVG}
        changeUser={setNumber}
        input={number}
      />
      <InputConfiguration
        title={'Ciudad'}
        Icon={LocationPinSVG}
        visibleIcon={true}
        ChangeIcon={EditSVG}
        changeUser={setCiudad}
        input={ciudad}
      />

      <TouchableOpacity
        style={styles.guardar}
        onPress={() => {
          getIdDocument(user.uid, name, number, ciudad, photo);
        }}>
        <Text>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
