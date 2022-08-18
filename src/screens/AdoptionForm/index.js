import React, {useState} from 'react';
import {View} from 'react-native';
import Header from '../../components/atoms/header';
import InputForm from '../../components/atoms/inputForm';
import QuestionForm from '../../components/atoms/QuestionForm';
import ButtonForm from '../../components/atoms/ButtonForm';
import functions from './functions';

const question1 = ['Si', 'Aveces', 'Muy amenudo', 'Nunca'];
const question2 = ['Casa', 'Patio', 'Calle', 'Nose'];

export default function AdoptionForm({navigation, route}) {
  const [tel, setTel] = useState('');
  const [correo, setCorreo] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [mascotas, setMascotas] = useState('');
  const [horas, setHoras] = useState('');
  const [pacifico, setPacifico] = useState('');
  const [lugar, setLugar] = useState('');
  const uid = route.params.data.uidUsuario;
  return (
    <View>
      <Header text="Formulario de adopción" navigation={navigation} />
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
          functions.add({
            tel,
            correo,
            ciudad,
            mascotas,
            horas,
            pacifico,
            lugar,
            navigation,
            uid,
          });
        }}
      />
    </View>
  );
}
