import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WlcomeScreen from '../screens/welcomescreen';
import SigninScreen from '../screens/signinscreen';
import LoginScreen from '../screens/loginscreen';
import SignupScreen from '../screens/signupscreen';
import SpalshScreen from '../screens/spalshscreen';
import HomeScreen from '../screens/homescreen';


const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="spalsh_screen">
      <Stack.Screen name="spalsh_screen" component={SpalshScreen} />
      <Stack.Screen name="welcome_screen" component={WlcomeScreen} />
      <Stack.Screen name="signin_screen" component={SigninScreen} />
      <Stack.Screen name="login_screen" component={LoginScreen} />
      <Stack.Screen name="signup_screen" component={SignupScreen} />
      <Stack.Screen name="home_screen" component={HomeScreen} />
      
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default HomeNavigation;