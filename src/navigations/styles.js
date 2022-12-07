import {StyleSheet} from 'react-native';
import colors from '../constants/Colors';
import FontSize from '../constants/FontSize';
import fonts from '../constants/Fonts';
import icons from '../constants/Icons';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    splashStyle:{
        headerShown: false 
    },
    numberStyle:{
        title: '',
   
    },

   
    homeStyle:{
        tabBarLabel:"Shop",
        showIcon:true,
        tabBarIcon:()=>(<Image source={icons.shop} />)
    },
    exploreStyle:{
        headerTitle: 'Find Products', 
        headerTitleAlign: 'center',
        tabBarLabel:"Explore", 
        tabBarIcon:()=>(<Image source={icons.search} />)
    },
    cartStyle:{
        headerTitle: 'My Cart', 
        headerTitleAlign: 'center',
        tabBarLabel:"Cart", 
        tabBarIcon:()=>(<Image source={icons.cart} />) 
    },
    favStyle:{
        headerTitle: 'Favorurite', 
        headerTitleAlign: 'center',
        tabBarLabel:"Favorurite",
        tabBarIcon:()=>(<Image source={icons.heartB} />)  
    },
    accountStyle:{
        headerShown: false,
        tabBarLabel:"Account",
        tabBarIcon:()=>(<Image source={icons.user} />)  
    }
});
export default styles;