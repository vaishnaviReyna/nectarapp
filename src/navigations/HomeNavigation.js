import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WlcomeScreen from '../screens/welcomescreen';
import SigninScreen from '../screens/signinscreen';
import NumberScreen from '../screens/numberscreen';
import VerificationScreen from '../screens/verificationscreen';
import LocationScreen from '../screens/locationScreen';
import LoginScreen from '../screens/loginscreen';
import SignupScreen from '../screens/signupscreen';
import SpalshScreen from '../screens/spalshscreen';
import TabNavigation from './TabNavigation';
import BasketScreen from '../screens/basketscreen';
import OrderScreen from '../screens/orderscreen';
import ExploreItemScreen from '../screens/exploreItemscreen';
import FilterScreen from '../screens/filterscreen';
import styles from './styles';

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="spalsh_screen">
        <Stack.Screen
          name="spalsh_screen"
          component={SpalshScreen}
          options={styles.splashStyle}
        />
        <Stack.Screen
          name="welcome_screen"
          component={WlcomeScreen}
          options={styles.splashStyle}
        />
        <Stack.Screen
          name="signin_screen"
          component={SigninScreen}
          options={styles.splashStyle}
        />
        <Stack.Screen
          name="number_screen"
          component={NumberScreen}
          options={styles.numberStyle}
        />
        <Stack.Screen
          name="verification_screen"
          component={VerificationScreen}
          options={styles.numberStyle}
        />
        <Stack.Screen
          name="location_screen"
          component={LocationScreen}
          options={styles.numberStyle}
        />
        <Stack.Screen
          name="login_screen"
          component={LoginScreen}
          options={styles.splashStyle}
        />
        <Stack.Screen
          name="signup_screen"
          component={SignupScreen}
          options={styles.splashStyle}
        />
        <Stack.Screen
          name="tab_screen"
          component={TabNavigation}
          options={styles.splashStyle}
        />
        <Stack.Screen
          name="basket_screen"
          component={BasketScreen}
          options={styles.numberStyle}
        />
        <Stack.Screen
          name="order_screen"
          component={OrderScreen}
          options={styles.splashStyle}
        />
        <Stack.Screen name="exploreitem_screen" component={ExploreItemScreen} />
        <Stack.Screen name="filter_screen" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigation;
