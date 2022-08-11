import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const addForm = (
  telefono,
  correo,
  ciudad,
  mascotas,
  horas,
  pacifico,
  lugar,
  navigation,
) => {
  if (
    telefono !== '' &&
    correo !== '' &&
    ciudad !== '' &&
    mascotas !== '' &&
    pacifico !== '' &&
    horas !== '' &&
    lugar !== ''
  ) {
    firestore()
      .collection('adopciones')
      .add({
        telefono: telefono,
        correo: correo,
        ciudad: ciudad,
        mascotas: mascotas,
        horas: horas,
        Pacifico: pacifico,
        lugarMascota: lugar,
        uidUsuario: auth().currentUser.uid,
        nombreUsuario: auth().currentUser.displayName,
      })
      .then(_ => {
        Alert.alert('Se ha enviado tu respuesta.', '', [
          {text: 'ok', onPress: () => navigation.goBack()},
        ]);
      })
      .catch(error => {
        Alert.alert('Error', error, [{text: 'ok'}]);
      });
  } else {
    Alert.alert('Por favor rellena los campos', '', [{text: 'ok'}]);
  }
};

const add = ({
  tel,
  correo,
  ciudad,
  mascotas,
  horas,
  pacifico,
  lugar,
  navigation,
}) => {
  addForm(tel, correo, ciudad, mascotas, horas, pacifico, lugar, navigation);
};

const functions = {
  add,
  addForm,
};

export default functions;
