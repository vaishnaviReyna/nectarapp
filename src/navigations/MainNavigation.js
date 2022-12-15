import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import HomeNavigation from './HomeNavigation';
import AuthNavigation from './AuthNavigation';

const MainNavigation = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing)setInitializing(false)  
    }
    
    useEffect(() => { 
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

     if (initializing) return null;

    console.log("user main screen", user);

    return (
        <NavigationContainer>
            {user ? <HomeNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    )
}
export default MainNavigation;