import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homescreen';
import WlcomeScreen from '../screens/welcomescreen';

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home_screen">
      <Stack.Screen name="Home_screen" component={HomeScreen} />
      <Stack.Screen name="welcome_screen" component={WlcomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default HomeNavigation;