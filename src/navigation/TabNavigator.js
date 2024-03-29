import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostsScreen from '../screens/PostsScreen';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

const screens = [
  {name: 'Home', label: 'Inicio'},
  {name: 'Stray', label: 'Extravíos'},
  {name: 'Adoptions', label: 'Adopciones'},
  {name: 'Favorites', label: 'Guardados'},
];

const hashtags = ['#Normal', '#Extravíos', '#Adopciones', '#Normal#Guardados'];

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        headerShown: false,
        tabBarInactiveTintColor: '#00000060',
        tabBarActiveTintColor: '#80486D',
        tabBarActiveBackgroundColor: '#D3A6BA',
        tabBarInactiveBackgroundColor: '#D3A6BA80',
        tabBarLabelStyle: {fontSize: 14},
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
      })}>
      {screens.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={PostsScreen}
          options={{tabBarLabel: item.label}}
          initialParams={{hashtag: hashtags[index]}}
        />
      ))}
    </Tab.Navigator>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Stray':
      iconName = 'map-marker';
      break;
    case 'Adoptions':
      iconName = 'dog-side';
      break;
    case 'Favorites':
      iconName = 'bookmark';
      break;
    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={27} color={color} />
  );
}
