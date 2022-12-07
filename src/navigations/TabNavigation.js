import { View, Text } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/Explorescreen';
import CartScreen from '../screens/cartscreen';
import HomeScreen from '../screens/homescreen';
import FavouriteScreen from '../screens/favouritescreen';
import AccountScreen from '../screens/accountscreen';
import styles from './styles';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={()=>({tabBarActiveTintColor: "green",tabBarInactiveTintColor: "black"})}>
      <Tab.Screen name="home_screen" component={HomeScreen} options={styles.homeStyle}/>
      <Tab.Screen name="explore_screen" component={ExploreScreen} options={styles.exploreStyle}/>
      <Tab.Screen name="cart_screen" component={CartScreen} options={styles.cartStyle}/>
      <Tab.Screen name="favourite_screen" component={FavouriteScreen}  options={styles.favStyle} />
      <Tab.Screen name="account_screen" component={AccountScreen} options={styles.accountStyle}/>
    </Tab.Navigator>
  )
}

export default TabNavigation