import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Images from '../../constants/Images';
import Button from '../../components/button';

const OrderScreen = ({navigation, route}) => {

  return (
    <View style={styles.container}>
      <View>
      <Image source={Images.sucess}/>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.title}>Your Order has been accepted</Text>
      <Text style={styles.subTitle}>Your items has been placcd and is on 
        it’s way to being processed</Text>
      </View>


      <View>
      <Button title="Track Order" />
      <Button title="Back to home" buttonStyle={styles.btn} textStyle={styles.btnTitle} buttonPress={()=>navigation.navigate('home_screen')}/>
      </View>

     
    </View>
  );
};

export default OrderScreen;
