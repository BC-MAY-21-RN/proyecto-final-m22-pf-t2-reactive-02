import {Alert} from 'react-native';
import firestore from '../../../services/firestore';
import auth from '../../../services/auth';

const setData = (form, data) => {
  return {
    telefono: form.dataForm.object.phone,
    correo: form.dataForm.object.email,
    ciudad: form.dataForm.object.city,
    mascotas: form.dataForm.object.q1,
    horas: form.dataForm.object.q3,
    Pacifico: form.dataForm.object.q2,
    lugarMascota: form.dataForm.object.q4,
    uidPosteo: data.data.uidUsuario,
    fecha: firestore.dateNow(),
    uidUsuario: auth.getId(),
    nombreUsuario: auth.getName(),
    imagenUsuario: auth.getPhoto(),
  };
};

const addForm = (form, loading, navigation, data) => {
  const {phone, email, city, q1, q2, q3, q4} = form.dataForm.object;
  const values = [phone, email, city, q1, q2, q3, q4];
  if (values.filter(item => item !== '').length === 7) {
    const dataAdoption = setData(form, data);
    firestore
      .addFunction('adopciones', dataAdoption)
      .then(() =>
        Alert.alert('Se ha enviado tu respuesta.', '', [
          {text: 'ok', onPress: () => navigation.goBack()},
        ]),
      )
      .catch(error => Alert.alert('Error', error, [{text: 'ok'}]));
  } else {
    Alert.alert('Por favor rellena los campos', [{text: 'ok'}]);
  }
};

export default {addForm};
