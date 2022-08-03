import React from 'react';
import {View, TextInput} from 'react-native';
import ButtonForm from '../../atoms/ButtonForm';
import InputForm from '../../atoms/inputForm';
import Header from '../../atoms/header';
import styles from './styles';
import PagerImageLocation from '../PagerImageLocation';

export default function NewPostForm({
  navigation,
  changePost,
  route,
  post,
  changeIndex,
  changeVisible,
}) {
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
      <PagerImageLocation
        change={changePost}
        changeIndex={changeIndex}
        post={post}
        changeVisible={changeVisible}
      />
      <ButtonForm text={'Publicar'} onPress={() => {}} />
    </View>
  );
}