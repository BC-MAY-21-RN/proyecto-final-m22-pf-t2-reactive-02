import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerItems from '../components/atoms/DrawerItems';

import ProfileScreen from '../screens/ProfileScreen';
import CommentsScreen from '../screens/CommentsScreen';
import PublicationScreen from '../screens/PublicationScreen';
import TabNavigator from './TabNavigator';
import ConfigurationScreen from '../screens/ConfigurationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AdoptionScreen from '../screens/AdoptionScreen';

const Drawer = createDrawerNavigator();

const screens = [
  {name: 'bottomTap', component: TabNavigator},
  {name: 'notificationScreen', component: NotificationScreen},
  {name: 'configurationScreen', component: ConfigurationScreen},
  {name: 'profileScreen', component: ProfileScreen},
  {name: 'adoptionScreen', component: AdoptionScreen},
  {name: 'commentsScreen', component: CommentsScreen},
  {name: 'publicationScreen', component: PublicationScreen},
];

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, unmountOnBlur: true}}
      drawerContent={props => <DrawerItems {...props} />}>
      {screens.map((item, i) => (
        <Drawer.Screen name={item.name} component={item.component} key={i} />
      ))}
    </Drawer.Navigator>
  );
}
