import * as React from 'react';
import { View, Text, Button } from 'react-native';
import SignScreen from './src/screens/SignScreen';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignScreen' component={SignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;