import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import ButtonForm from '../../components/atoms/ButtonForm';
import Header from '../../components/atoms/header';
import ImageUpload from '../../components/atoms/ImageUpload';
import InputForm from '../../components/atoms/inputForm';

export default function NewPublication({navigation}) {
  const handleSubmit = () => {};
  return (
    <View style={styles.container}>
      <Header text={'Crear publicación'} navigation={navigation} />
      <TextInput
        multiline
        numberOfLines={15}
        placeholder={'Escribe lo que piensas...'}
        style={styles.textInput}
      />
      <InputForm text={'Añade un #Hashtag'} />
      <ImageUpload />
      <View style={styles.button}>
        <ButtonForm text={'Publicar'} onPress={handleSubmit} />
      </View>
    </View>
  );
}
