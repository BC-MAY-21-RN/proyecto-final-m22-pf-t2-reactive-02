import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../screens/registerScreen';
import LoginScreen from '../screens/loginScreen';
import UserContext from '../context/UserContext.js';
import auth from '@react-native-firebase/auth';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const stackNoLoged = [
  {
    name: 'registerScreen',
    component: RegisterScreen,
    title: 'registerScreen',
    header: false,
  },
  {
    name: 'loginScreen',
    component: LoginScreen,
    title: 'loginScreen',
    header: false,
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

const Navigation = () => {
  const {user, setUser} = React.useContext(UserContext);

  function onAuthStateChanged(userInfo) {
    setUser(userInfo);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {typeStack(user).map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{headerShown: item.header}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
