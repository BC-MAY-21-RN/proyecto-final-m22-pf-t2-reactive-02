import React from 'react';
import {View, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import auth from '../../../services/auth';
import styles from './styles';
import gs from '../../../const/globalStyles';
import Input from '../Input';
import colors from '../../../const/colors';
import initialValues from '../../../const/initialValues';
import functions from './functions';

export default function InputComment({text, postid, comments}) {
  return (
    <View style={styles().container}>
      <Image source={{uri: auth.getPhoto()}} style={gs.image} />
      <View style={styles().containerInput}>
        <Input
          type={'normal'}
          changeInput={text.handleData}
          keyObj={'text'}
          props={{
            style: styles(text.dataForm.object.updateComment).input,
            placeholder: 'Escribe un comentario...',
            defaultValue: text.dataForm.object.text,
          }}
        />
      </View>
      <Icon
        name={'ios-paper-plane'}
        type={'ionicon'}
        containerStyle={
          styles(text.dataForm.object.updateComment).iconContainer
        }
        style={styles().icon}
        onPress={() => functions.sendComment(text, postid, comments)}
      />
      {text.dataForm.object.updateComment ? (
        <Icon
          name={'close-circle'}
          type={'material-community'}
          color={colors.red}
          containerStyle={styles().cancel}
          onPress={() => text.handleData(initialValues.initialComment)}
        />
      ) : null}
    </View>
  );
}
