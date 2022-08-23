import React from 'react';
import {View} from 'react-native';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Questions from '../../atoms/Questions';
import styles from './styles';
import globalStyles from '../../../const/globalStyles';
import questions from './const';
import functions from './functions';

const propsInput = text => {
  return {
    placeholder: text,
    style: styles.input,
    keyboardType: text === 'Teléfono' ? 'numeric' : 'default',
  };
};

export default function AdoptionForm({form, loading, navigation, params}) {
  return (
    <View style={styles.container}>
      <Input
        type={'normal'}
        props={propsInput('Teléfono')}
        keyObj={'phone'}
        changeInput={form.handleData}
      />
      <Input
        type={'normal'}
        props={propsInput('Correo')}
        keyObj={'email'}
        changeInput={form.handleData}
      />
      <Input
        type={'normal'}
        props={propsInput('Ciudad')}
        keyObj={'city'}
        changeInput={form.handleData}
      />
      {questions.map((element, i) => (
        <Questions
          key={i}
          text={element.text}
          keyObj={element.keyObj}
          type={element.type}
          data={element.data}
          changeInput={form.handleData}
        />
      ))}
      <Button
        disabled={true}
        style={globalStyles}
        text={'Enviar'}
        onPress={() => functions.addForm(form, loading, navigation, params)}
      />
    </View>
  );
}
