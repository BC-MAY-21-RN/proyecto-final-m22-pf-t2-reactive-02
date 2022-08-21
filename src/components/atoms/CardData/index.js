import React from 'react';
import {Card} from 'react-native-elements';
import auth from '../../../services/auth';
import {View, Text} from 'react-native';
import UserPost from '../UserPost';
import styles from './styles';
//import Button from '../Button';
import helpers from '../../../utils/helpers';
//import firestore from '../../../services/firestore';
//import functions from './functions';
import CommentOptions from './CommentOptions';

/*
const edit = (text, data) => {
  text.handleData({
    ['updateComment']: true,
    ['idComment']: data.idDoc,
    ['text']: data.texto,
  });
};

const deleteComment = (idDoc, comments) => {
  firestore
    .deleteFunction(idDoc, 'comentarios')
    .then(() => {
      const data = comments.data;
      const newData = data.filter(item => item.idDoc !== idDoc);
      comments.handleComments(newData);
    })
    .catch(() => {
      Alert.alert('Error al eliminar el comentario.');
    });
};*/

export default function CardData({data, text, comments, navigation}) {
  return (
    <Card containerStyle={{}}>
      <View style={styles.iconPosition}>
        <UserPost
          image={data.photo}
          name={data.userName}
          time={helpers.dateToString(data)}
          navigation={navigation}
          id={data.userId}
        />
        {data.userId === auth.getId() ? (
          <CommentOptions text={text} data={data} comments={comments} />
        ) : null}
      </View>
      <Text>{data.texto}</Text>
    </Card>
  );
}
