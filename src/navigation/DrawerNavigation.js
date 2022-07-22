import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/homeScreen';
import NotificationScreen from '../screens/notificationScreen';
import ConfigurationScreen from '../screens/configurationScreen';
import DrawerItems from '../components/atoms/DrawerItems';
import ProfileScreen from '../screens/profileScreen';
import AdoptionForm from '../screens/AdoptionForm';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerItems {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Configuration" component={ConfigurationScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="AdoptionForm" component={AdoptionForm} />
    </Drawer.Navigator>
  );
}
