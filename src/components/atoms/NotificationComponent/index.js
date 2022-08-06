import React from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-elements';
import UserPost from '../UserPost';
import Verify from '../DrawerItems/functions';

export default function NotificationComponent({data}) {
  return (
    <Card>
      <UserPost
        name={Verify(data.userName) ? data.userName : 'Funganito'}
        time={'7 hrs'}
        image={
          Verify(data.photo)
            ? data.photo
            : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg'
        }
      />
      <Text style={{marginHorizontal: 15}}>{data.texto}</Text>
    </Card>
  );
}
