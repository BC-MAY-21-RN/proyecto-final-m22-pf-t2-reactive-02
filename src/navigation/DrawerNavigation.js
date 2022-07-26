import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NotificationScreen from '../screens/notificationScreen';
import ConfigurationScreen from '../screens/configurationScreen';
import DrawerItems from '../components/atoms/DrawerItems';
import ProfileScreen from '../screens/profileScreen';
import AdoptionForm from '../screens/AdoptionForm';
import TabNavigator from './TabNavigator';
import NewPublication from '../screens/NewPublication';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerItems {...props} />}>
      <Drawer.Screen name="BottomTab" component={TabNavigator} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Configuration" component={ConfigurationScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="AdoptionForm" component={AdoptionForm} />
      <Drawer.Screen name="NewPublication" component={NewPublication} />
    </Drawer.Navigator>
  );
}
