
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/home';
import SignInScreen from '../screens/signIn';
import PropertyAddScreen from '../screens/propertyAdd';
import AddClientScreen from '../screens/addClient';
import ProfileScreen from '../screens/profile';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signInScreen" component={SignInScreen} />
      <Stack.Screen name="homeScreen" component={HomeScreen} />
      <Stack.Screen name="propertyAddScreen" component={PropertyAddScreen} />
      <Stack.Screen name="addClientScreen" component={AddClientScreen} />
      <Stack.Screen name="profileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
