import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import Header from '../../components/atoms/header';
import TopBar from '../../components/atoms/TopBar';
import InputForm from '../../components/atoms/inputForm';
import QuestionForm from '../../components/atoms/QuestionForm';
import ButtonForm from '../../components/atoms/ButtonForm';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const question1 = ['Si', 'Aveces', 'Muy amenudo', 'Nunca'];
const question2 = ['Casa', 'Patio', 'Calle', 'Nose'];

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

const functions = ({
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

export default function AdoptionForm({navigation}) {
  const [tel, setTel] = useState('');
  const [correo, setCorreo] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [mascotas, setMascotas] = useState('');
  const [horas, setHoras] = useState('');
  const [pacifico, setPacifico] = useState('');
  const [lugar, setLugar] = useState('');
  return (
    <View>
      <TopBar navigation={navigation} iconVisible={false} />
      <Header
        text="Formulario de adopción"
        navigation={navigation}
        filter={true}
      />
      <View>
        <InputForm
          text={'Teléfono'}
          keyvalue={'telefono'}
          change={newTel => setTel(newTel)}
        />
        <InputForm
          text={'Correo'}
          keyvalue={'correo'}
          change={newCorreo => setCorreo(newCorreo)}
        />
        <InputForm
          text={'Ciudad'}
          keyvalue={'ciudad'}
          change={newCiudad => setCiudad(newCiudad)}
        />
      </View>
      <View>
        <QuestionForm
          text={'¿Cuántas mascotas tienes?'}
          changeField={true}
          change={newMascotas => setMascotas(newMascotas)}
        />
        <QuestionForm
          text={'¿Conviven con otras mascotas de forma pacifica?'}
          data={question1}
          selected={selectedItem => {
            setPacifico(selectedItem);
          }}
        />
        <QuestionForm
          text={'¿Cuántas horas al día pasará tu mascota sola?'}
          changeField={true}
          change={newHoras => setHoras(newHoras)}
        />
        <QuestionForm
          text={'Tu mascota estará mayormente...'}
          data={question2}
          selected={selectedItem => {
            setLugar(selectedItem);
          }}
        />
      </View>
      <ButtonForm
        text={'Enviar Formulario'}
        onPress={() => {
          functions({
            tel,
            correo,
            ciudad,
            mascotas,
            horas,
            pacifico,
            lugar,
            navigation,
          });
        }}
      />
    </View>
  );
}
