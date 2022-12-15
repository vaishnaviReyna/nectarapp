import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import icons from '../../constants/Icons';
import Input from '../../components/input';
import Button from '../../components/button';
import auth from '@react-native-firebase/auth';
import { useDispatch } from "react-redux";
import { getCoin } from '../../redux/action/index';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch();

  const signIn = async (email, password) => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter all fields')
    }
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      const userinfo = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        avtar: user.photoURL,
      };
      dispatch(getCoin(userinfo));
    } catch (err) {
      return Alert.alert(err.code, err.message);
    }
  }
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
          <Input leftIcon="" telcode="" style={styles.inputStyle} value={email} onChangeText={(e) => setEmail(e)} />
          <Text style={styles.pass}>Password</Text>
          <Input
            leftIcon=""
            telcode=""
            secureTextEntry={true}
            style={styles.inputStyle}
            value={password} onChangeText={(e) => setPassword(e)}
          />
          <Button
            title="Log In"
            buttonPress={() => signIn(email, password)}
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
