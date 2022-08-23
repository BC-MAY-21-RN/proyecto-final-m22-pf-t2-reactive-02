import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';
import auth from '../../../services/auth';
import Button from '../Button';
import styles from './styles';

const components = [
  {text: 'Inicio', icon: 'home', screen: 'bottomTap'},
  {
    text: 'Notificaciones de Adopción',
    icon: 'adduser',
    screen: 'notificationScreen',
  },
  {text: 'Configuración', icon: 'setting', screen: 'configurationScreen'},
  {text: 'Cerrar Sesión', icon: 'logout', screen: false},
];

export default function DrawerItems({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.userInfo}
          onPress={() =>
            navigation.navigate('profileScreen', {id: auth.getId()})
          }>
          <Image source={{uri: auth.getPhoto()}} style={styles.img} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{auth.getName()}</Text>
            <Text style={styles.email}>{auth.getEmail()}</Text>
          </View>
        </TouchableOpacity>
        <Icon
          name={'close'}
          type={'antdesign'}
          containerStyle={styles.close}
          onPress={() => navigation.closeDrawer()}
        />
      </View>
      <DrawerContentScrollView style={styles.scrollView}>
        {components.map((item, i) => (
          <Button
            key={i}
            text={item.text}
            disabled={true}
            style={styles}
            onPress={() => {
              item.screen === false
                ? auth.logout()
                : navigation.navigate(item.screen);
            }}
            children={
              <Icon
                name={item.icon}
                type="antdesign"
                containerStyle={styles.iconPosition}
              />
            }
          />
        ))}
      </DrawerContentScrollView>
    </View>
  );
}
