import React from 'react';
import {Text, View} from 'react-native';
import UserPost from '../UserPost';

export default function NotificationAdoption({data, setGetData, getData}) {
  return (
    <View>
      <UserPost
        name={data.nombreUsuario}
        image={data.imagenUsuario}
        time={'7h ago'}
      />
      <Text>Ha respondido tu formulario de adopción</Text>
    </View>
  );
}
