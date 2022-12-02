import { View, Text, ImageBackground,Image } from 'react-native'
import React from 'react'
import Images from '../../constants/Images';
import icons from '../../constants/Icons';
import styles from './styles';
import Button from '../../components/button';

const WlcomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={Images.deliveryboy} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
      <Image source={icons.logo} style ={styles.logo}/>
        <Text style={styles.title}>  Welcome{"\n"}to our store</Text>
        <Text style={styles.subTitle}>Get your groceries in as fast as one hour</Text>
        <Button title="Get Started" buttonStyle={styles.buttonStyle} buttonPress={() => navigation.navigate('signin_screen')}/>
        </View> 
       </ImageBackground>
    </View>
  )
}

export default WlcomeScreen