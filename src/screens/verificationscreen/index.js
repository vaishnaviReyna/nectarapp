import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import icons from '../../constants/Icons';
import Button from '../../components/button';
import Input from '../../components/input';

const VerificationScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={{height: Dimensions.get('window').height}}>
        <Text style={styles.title}>Enter your 4-digit code</Text>
        <Text style={styles.subTitle}>Code</Text>
        <Input
          leftIcon=""
          telcode=""
          style={styles.inputStyle}
          keyboardType={'numeric'}
          placeholder="-- -- -- --"
        />
      </View>
      <View style={styles.btnBox}>
        <Text style={styles.code}>Resend Code</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('location_screen')}>
          <Image source={icons.rightWarrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerificationScreen;
