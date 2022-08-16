import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import InputConfiguration from '../../atoms/inputConfiguration';
import EmailSVG from '../../../assets/icons/mail.svg';
import PhoneSVG from '../../../assets/icons/phone.svg';
import LocationPinSVG from '../../../assets/icons/location_pin.svg';
import LocationSVG from '../../../assets/icons/location.svg';
import EditSVG from '../../../assets/icons/create.svg';
import AddSVG from '../../../assets/icons/arrow.svg';
import firestore from '@react-native-firebase/firestore';

const getIdDocument = (id, docID, setDocID, email, number, ciudad) => {
  firestore()
    .collection('usuarios')
    .where('uid', '==', id)
    .get()
    .then(querySnapshot => {
      const id = querySnapshot.forEach(documentSnapshot =>
        setDocID(documentSnapshot.ref.id),
      );
      update(docID, email, number, ciudad);
    });
};
const update = (idDoc, email, number, ciudad) => {
  firestore()
    .collection('usuarios')
    .doc(idDoc)
    .update({correo: email, phoneNumber: number, ciudad: ciudad})
    .then(() => {});
};

export default function ConfigurationContent() {
  const user = auth().currentUser;

  const [email, setEmail] = useState(user.email);
  const [number, setNumber] = useState(user.phoneNumber);
  const [ciudad, setCiudad] = useState(user.displayName);
  const [docID, setDocId] = useState(user.displayName);

  return (
    <View style={styles.container}>
      <InputConfiguration
        title={user.email}
        Icon={EmailSVG}
        visibleIcon={true}
        ChangeIcon={EditSVG}
        changeUser={setEmail}
        input={email}
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
      <InputConfiguration
        title={'Agregar ubicación'}
        Icon={LocationSVG}
        visibleIcon={true}
        ChangeIcon={AddSVG}
      />
      <TouchableOpacity
        style={styles.guardar}
        onPress={() =>
          getIdDocument(user.uid, docID, setDocId, email, number, ciudad)
        }>
        <Text>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
