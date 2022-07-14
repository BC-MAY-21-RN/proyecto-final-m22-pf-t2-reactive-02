import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import ButtonDrawer from '../ButtonDrawer/index';
import auth from '@react-native-firebase/auth';
import {Icon} from 'react-native-elements';
import styleDrawer from './styleDrawer';

const logout = () => {
  auth()
    .signOut()
    .then(() => {});
};

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
                uri: 'https://cdn-icons-png.flaticon.com/512/17/17004.png',
              }}
              style={styleDrawer.image}
            />
          </View>
          <View style={styleDrawer.dataProfile}>
            <Text style={styleDrawer.textName}>Sunny Aveiro</Text>
            <Text style={styleDrawer.textEmail}>sunny12@gmail.com</Text>
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
