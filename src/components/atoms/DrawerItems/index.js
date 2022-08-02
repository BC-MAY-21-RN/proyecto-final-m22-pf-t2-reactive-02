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
const user = auth().currentUser;
export default function DrawerItems({navigation}) {
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
                uri: functions.VerifyPhoto()
                  ? user.photoURL
                  : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg',
              }}
              style={styleDrawer.image}
            />
          </View>
          <View style={styleDrawer.dataProfile}>
            <Text style={styleDrawer.textName}>
              {functions.VerifyName() ? user.displayName : 'Funganito'}
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
