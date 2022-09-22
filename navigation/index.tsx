import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ListContainer from "../screens/ListContainer";
import AuthorizationScreen from "../screens/AuthorizationScreen";

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="AuthorizationScreen" component={AuthorizationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ListContainer" component={ListContainer} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}