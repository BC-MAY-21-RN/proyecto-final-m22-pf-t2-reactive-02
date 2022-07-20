import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import ButtonDrawer from '../ButtonDrawer/index';
import auth from '@react-native-firebase/auth';
import {Icon} from 'react-native-elements';
import styleDrawer from './styleDrawer';
import functions from './functions';

const logout = () => {
  auth()
    .signOut()
    .then(() => {});
};

export default function DrawerItems({navigation}) {
  const [name, setName] = useState(functions.VerifyName());
  const [photo, setPhoto] = useState(functions.VerifyPhoto());
  const user = auth().currentUser;
  return (
    <View style={styleDrawer.container}>
      <View style={styleDrawer.header}>
        <TouchableOpacity
          style={styleDrawer.iconExitPosition}
          onPress={() => {
            navigation.closeDrawer();
          }}>
          <Icon
            name={'close'}
            type={'antdesign'}
            style={styleDrawer.iconExit}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styleDrawer.headerItem}
          onPress={() => navigation.navigate('Profile')}>
          <View>
            <Image
              source={{
                uri: photo
                  ? user.photoURL
                  : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg',
              }}
              style={styleDrawer.image}
            />
          </View>
          <View style={styleDrawer.dataProfile}>
            <Text style={styleDrawer.textName}>
              {name ? user.displayName : 'Funganito'}
            </Text>
            <Text style={styleDrawer.textEmail}>{user.email}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerContentScrollView style={styleDrawer.scrollView}>
        <View>
          <ButtonDrawer
            text={'Home'}
            onPress={() => navigation.navigate('Home')}
            icon={'home'}
          />
          <ButtonDrawer
            text={'Notificaciones de Adopción'}
            onPress={() => navigation.navigate('Notification')}
            icon={'adduser'}
          />
          <ButtonDrawer
            text={'Configuración'}
            onPress={() => navigation.navigate('Configuration')}
            icon={'setting'}
          />
          <ButtonDrawer
            text={'Cerrar Sesión'}
            onPress={() => {
              logout();
            }}
            icon={'logout'}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
