import React from 'react';
import {View} from 'react-native';
import Header from '../../components/atoms/header';
import TopBar from '../../components/atoms/TopBar';
import InputForm from '../../components/atoms/inputForm';
import QuestionForm from '../../components/atoms/QuestionForm';
import ButtonForm from '../../components/atoms/ButtonForm';

const question1 = ['Si', 'Aveces', 'Muy amenudo', 'Nunca'];
const question2 = ['Casa', 'Patio', 'Calle', 'Nose'];

export default function AdoptionForm({navigation}) {
  return (
    <View>
      <TopBar navigation={navigation} />
      <Header text="Formulario de adopción" navigation={navigation} />
      <View>
        <InputForm text={'Teléfono'} />
        <InputForm text={'Correo'} />
        <InputForm text={'Ciudad'} />
      </View>
      <View>
        <QuestionForm text={'¿Cuántas mascotas tienes?'} changeField={true} />
        <QuestionForm
          text={'¿Conviven con otras mascotas de forma pacifica?'}
          data={question1}
        />
        <QuestionForm
          text={'¿Cuántas horas al día pasará tu mascota sola?'}
          changeField={true}
        />
        <QuestionForm
          text={'Tu mascota estará mayormente...'}
          data={question2}
        />
      </View>
      <ButtonForm text={'Enviar Formulario'} type={true} />
    </View>
  );
}
