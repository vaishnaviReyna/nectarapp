import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import icons from '../../constants/Icons';
import Button from '../../components/button';
import Input from '../../components/input';

const NumberScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={{height: Dimensions.get('window').height}}>
        <Text style={styles.title}>Enter your mobile number</Text>
        <Text style={styles.subTitle}>Mobile Number</Text>
        <Input style={styles.inputStyle} keyboardType={'numeric'} />
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('verification_screen')}>
          <Image source={icons.rightWarrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NumberScreen;
