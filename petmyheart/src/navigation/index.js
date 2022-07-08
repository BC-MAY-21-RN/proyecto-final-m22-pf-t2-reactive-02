import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import registerScreen from '../screens/registerScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="registerScreen" component={registerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
