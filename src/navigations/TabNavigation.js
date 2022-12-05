import { View, Text } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/Explorescreen';
import CartScreen from '../screens/cartscreen';
import HomeScreen from '../screens/homescreen';
import FavouriteScreen from '../screens/favouritescreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="home_screen" component={HomeScreen}  />
      <Tab.Screen name="explore_screen" component={ExploreScreen}/>
      <Tab.Screen name="cart_screen" component={CartScreen} />
      <Tab.Screen name="favourite_screen" component={FavouriteScreen} />
    </Tab.Navigator>
//   </NavigationContainer>
  )
}

export default TabNavigation