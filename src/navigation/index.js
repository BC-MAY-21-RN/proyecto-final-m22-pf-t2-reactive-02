import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useAuthChange from '../hooks/useAuthChange';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgetScreen from '../screens/ForgetScreen';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const stackNoLoged = [
  {
    name: 'welcomeScreen',
    component: SplashScreen,
    title: 'welcomeScreen',
  },
  {
    name: 'registerScreen',
    component: RegisterScreen,
    title: 'registerScreen',
  },
  {
    name: 'loginScreen',
    component: LoginScreen,
    title: 'loginScreen',
  },
  {
    name: 'forgetScreen',
    component: ForgetScreen,
    title: 'forgetScreen',
  },
];

const stackLoged = [
  {
    name: 'DrawerNavigation',
    component: DrawerNavigation,
    title: 'DrawerNavigation',
    header: false,
  },
];

const typeStack = user => {
  if (user === null) {
    return stackNoLoged;
  } else {
    return stackLoged;
  }
};

export default function Navigation() {
  const {user} = useAuthChange();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {typeStack(user).map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
