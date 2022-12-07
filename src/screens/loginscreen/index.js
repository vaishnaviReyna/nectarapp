import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import icons from '../../constants/Icons';
import Input from '../../components/input';
import Button from '../../components/button';
const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={icons.carrotOrg} />
        </View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subTitle}>Enter your email and password</Text>
        <View style={styles.loginArea}>
          <Text>Email</Text>
          <Input leftIcon="" telcode="" style={styles.inputStyle} />

          <Text style={styles.pass}>Password</Text>
          <Input
            leftIcon=""
            telcode=""
            secureTextEntry={true}
            style={styles.inputStyle}
          />
          <View>
            <Text style={styles.fpass}>Forgot Password?</Text>
          </View>
          <Button
            title="Log In"
            buttonPress={() => navigation.navigate('signup_screen')}
          />

          <View style={styles.bottomText}>
            <Text>Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate('signup_screen')}>
              <Text style={styles.signText}>Signup</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
