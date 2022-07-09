import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loginScreen from '../screens/loginScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginScreen" component={loginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
