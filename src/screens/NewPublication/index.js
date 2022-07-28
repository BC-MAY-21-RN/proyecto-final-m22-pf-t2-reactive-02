import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import ButtonForm from '../../components/atoms/ButtonForm';
import Header from '../../components/atoms/header';
import ImageUpload from '../../components/atoms/ImageUpload';
import InputForm from '../../components/atoms/inputForm';
import NewPost from '../../models/NewPost';

const newObject = (object, key, value) => {
  object.setValues({[key]: value});
  console.log(object);
  return new NewPost(
    object.valuesPost.hashtags,
    object.valuesPost.text,
    object.valuesPost.images,
    object.valuesPost.location,
  );
};

export default function NewPublication({navigation, route}) {
  const [post, setPost] = useState(new NewPost(route.params.hashtag));
  const changePost = (value, key) => setPost(newObject(post, key, value));

  return (
    <FormPost changePost={changePost} navigation={navigation} route={route} />
  );
}

const FormPost = ({navigation, changePost, route}) => {
  return (
    <View style={styles.container}>
      <Header text={'Crear publicación'} navigation={navigation} />
      <TextInput
        multiline
        numberOfLines={15}
        placeholder={'Escribe lo que piensas...'}
        style={styles.textInput}
        onChange={e => changePost(e.nativeEvent.text, 'text')}
      />
      <InputForm
        text={'Añade un #Hashtag'}
        hashtag={'#' + route.params.hashtag}
        change={changePost}
        keyvalue={'hashtags'}
      />
      <ImageUpload />
      <View style={styles.button}>
        <ButtonForm text={'Publicar'} type={true} />
      </View>
    </View>
  );
};
