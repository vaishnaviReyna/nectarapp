import React from 'react';
import {Text,View} from 'react-native';
import HomeNavigation from './src/navigations/HomeNavigation';
import MainNavigation from './src/navigations/MainNavigation';
import {Provider} from "react-redux";

const App = () => {
  // return <HomeNavigation/>;
   return <MainNavigation/>
}

export default App;
