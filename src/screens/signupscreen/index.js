import {View, Text, Image, Pressable,ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import icons from '../../constants/Icons';
import Input from '../../components/input';
import Button from '../../components/button';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
       <ScrollView>
      <View style={styles.container}>
      <Image source={icons.carrotOrg}/>
      </View>
     <Text style={styles.title}>Sign Up</Text>
     <Text style={styles.subTitle}>Enter your credentials to continue</Text>
     <View style={styles.loginArea}>

      <Text>Username</Text>
      <Input  leftIcon ="" telcode="" style={styles.inputStyle}/>

      <Text style={styles.pass}>Email</Text>
      <Input  leftIcon ="" telcode="" style={styles.inputStyle} />
      
      <Text style={styles.pass}>Password</Text>
      <Input  leftIcon ="" telcode="" secureTextEntry={true} style={styles.inputStyle}/>
      <View>
      <Text style={styles.fpass}>Forgot Password?</Text>
      </View>
      <Button title="Log In" buttonPress={() => navigation.navigate('home_screen')}/>
      
      <View style={styles.bottomText}>
      <Text>Don't have an account?</Text> 
      <Pressable onPress={()=> navigation.navigate('home_screen')}>
        <Text style={styles.signText}>Signup</Text>
      </Pressable>
      </View>
     
      </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
