import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from './src/screens/preload';
import Home from './src/screens/home';
import Cota from './src/screens/cota';
import ListaItem from './src/screens/listaItem';
import Lista from './src/screens/lista';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preload">
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTintColor: 'black', title: 'LISTAS', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center' }}
      />
      <Stack.Screen
          name="Cota"
          component={Cota}
          options={{ headerTransparent: true, title: '' }}
        />
         <Stack.Screen
          name="ListaItem"
          component={ListaItem}
          options={{ headerTransparent: true, title: '' }}
        />
        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{ headerTransparent: true, title: '' }}
        />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
