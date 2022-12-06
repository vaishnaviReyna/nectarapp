import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WlcomeScreen from '../screens/welcomescreen';
import SigninScreen from '../screens/signinscreen';
import LoginScreen from '../screens/loginscreen';
import SignupScreen from '../screens/signupscreen';
import SpalshScreen from '../screens/spalshscreen';
import TabNavigation from './TabNavigation';
import BasketScreen from '../screens/basketscreen';
import OrderScreen from '../screens/orderscreen';
import ExploreItemScreen from '../screens/exploreItemscreen';
import FilterScreen from '../screens/filterscreen';

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
      <Stack.Screen name="tab_screen" component={TabNavigation} options= {{ headerShown: false }}/>
      <Stack.Screen name="basket_screen" component={BasketScreen} />
      <Stack.Screen name="order_screen" component={OrderScreen} />
      <Stack.Screen name="exploreitem_screen" component={ExploreItemScreen} />
      <Stack.Screen name="filter_screen" component={FilterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default HomeNavigation;