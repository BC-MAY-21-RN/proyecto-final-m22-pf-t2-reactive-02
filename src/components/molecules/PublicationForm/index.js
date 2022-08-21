import React from 'react';
import {View} from 'react-native';
import Header from '../../atoms/Header';
import Input from '../../atoms/Input';
import styles from './styles';
import PagerImageLocation from '../PagerImageLocation';
import functions from './functions';
import Button from '../../atoms/Button';
import globalStyles from '../../../const/globalStyles';

const propsInput = form => {
  return {
    multiline: true,
    numberOfLines: 15,
    placeholder: 'Escribe lo que piensas...',
    style: styles.textInput,
    defaultValue: form.object.text,
  };
};

const propsHashtagInput = hashtags => {
  return {
    placeholder: 'Añade un #Hashtag',
    style: styles.input,
    defaultValue: hashtags,
  };
};

export default function PublicationForm({
  navigation,
  loading,
  modals,
  dataForm,
  handleData,
  hashtags,
  idDoc,
}) {
  return (
    <View style={styles.container}>
      <Header text={'Crear publicación'} navigation={navigation} />
      <Input
        type={'normal'}
        props={propsInput(dataForm)}
        keyObj={'text'}
        changeInput={handleData}
      />
      <Input
        type={'normal'}
        props={propsHashtagInput(hashtags)}
        keyObj={'hashtags'}
        changeInput={handleData}
      />
      <PagerImageLocation
        dataForm={dataForm}
        modals={modals}
        handleData={handleData}
      />
      <Button
        disabled={true}
        style={globalStyles}
        text={'Publicar'}
        onPress={() =>
          functions.uploadData(dataForm, loading.changeState, navigation, idDoc)
        }
      />
    </View>
  );
}
