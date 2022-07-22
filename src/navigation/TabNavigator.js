import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostsScreen from '../screens/postsScreen';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

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
        tabBarLabelStyle: {fontSize: 13},
      })}>
      <Tab.Screen
        name="Home"
        component={PostsScreen}
        options={{tabBarLabel: 'Inicio'}}
      />
      <Tab.Screen
        name="Stray"
        component={PostsScreen}
        options={{tabBarLabel: 'Extravios'}}
      />
      <Tab.Screen
        name="Adoptions"
        component={PostsScreen}
        options={{tabBarLabel: 'Adopciones'}}
      />
      <Tab.Screen
        name="Favorites"
        component={PostsScreen}
        options={{tabBarLabel: 'Guardados'}}
      />
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
