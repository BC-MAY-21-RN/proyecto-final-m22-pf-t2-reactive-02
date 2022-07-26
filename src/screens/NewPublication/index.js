import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import ButtonForm from '../../components/atoms/ButtonForm';
import Header from '../../components/atoms/header';
import ImageUpload from '../../components/atoms/ImageUpload';
import InputForm from '../../components/atoms/inputForm';
import NewPost from '../../models/NewPost';

export default function NewPublication({navigation, route}) {
  const [post, setPost] = useState(new NewPost(route.params.hashtag));
  return (
    <View style={styles.container}>
      <Header text={'Crear publicación'} navigation={navigation} />
      <TextInput
        multiline
        numberOfLines={15}
        placeholder={'Escribe lo que piensas...'}
        style={styles.textInput}
      />
      <InputForm
        text={'Añade un #Hashtag'}
        hashtag={'#' + route.params.hashtag}
      />
      <ImageUpload />
      <View style={styles.button}>
        <ButtonForm text={'Publicar'} type={true} />
      </View>
    </View>
  );
}
