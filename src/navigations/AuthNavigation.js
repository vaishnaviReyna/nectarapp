import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import LoginScreen from '../screens/loginscreen';
import SignupScreen from '../screens/signupscreen';
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (

    <Stack.Navigator>
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
      {/* <Stack.Screen
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
        <Stack.Screen name="filter_screen" component={FilterScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
