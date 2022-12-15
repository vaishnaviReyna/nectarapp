import {View, Text, Image, Pressable, ScrollView,TouchableOpacity} from 'react-native';
import React, {useState } from 'react';
import styles from './styles';
import icons from '../../constants/Icons';
import Input from '../../components/input';
import Button from '../../components/button';
import auth from "@react-native-firebase/auth";
import{signUp} from "../../firebase/auth"
import {ref,set} from "@firebase/database";
import {db} from '../../firebase/config';
import { registerVersion } from 'firebase/app';
import {launchImageLibrary} from 'react-native-image-picker';

const SignupScreen = ({navigation}) => {
  const [ userName, setUserName ]= useState()
  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()
  const [userSkill,setUserSkill]= useState()
  const [galleryphoto,setUploadImage]=useState();

  const storeabc =()=>{

    set(ref(db,'users/'+ userName),{
      userName:userName,
      userSkill:userSkill,
    }).then (()=>{
    console.log("data update")
  }).catch((error)=>{
    console.log("error")
  })
  }

  const OPENPICKER = () => {
    var options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel != true) {
        setUploadImage(response?.assets[0].uri);
      }
    });
  };
 
  const signUp = async (fullName,galleryphoto,email, password) => {

    if(!fullName || !galleryphoto || !email || !password){
       console.log('Error', 'Please enter all fields')
    }
    else{
      storeabc();
      console.log("sucess update");
    }
    try {
      const cred = await auth().createUserWithEmailAndPassword(email, password);
      const { uid } = cred.user;
      auth().currentUser.updateProfile({
        displayName: fullName,
        photoURL:galleryphoto,
      });
      const uid_1 = uid;
      return createUserInDb(uid_1, fullName, email);
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
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>Enter your credentials to continue</Text>
        <View style={styles.loginArea}>

          <Text>Username</Text>
          <Input leftIcon="" telcode="" style={styles.inputStyle} value={userName} onChangeText={(e)=>setUserName(e)} />

          <Text style={styles.pass}>Email</Text>
          <Input leftIcon="" telcode="" style={styles.inputStyle} value={email} onChangeText={(e)=>setEmail(e)} />

          <Text style={styles.pass}>Password</Text>
          <Input leftIcon="" telcode="" style={styles.inputStyle}   secureTextEntry={true} value={password} onChangeText={(e)=>setPassword(e)} />
        
          <Text style={styles.pass}>userSkills</Text>
          <Input leftIcon="" telcode="" style={styles.inputStyle} value={userSkill} onChangeText={(e)=>setUserSkill(e)} />

        <View  style={styles.cameraText}>
          <TouchableOpacity onPress={()=> OPENPICKER()}>
          <Image source={icons.camera} />
          </TouchableOpacity>
          <Image
        style={styles.tinyLogo}
        source={{
          uri:galleryphoto,
        }}/> 
        </View>
     
            <View style={styles.bottomText}>
            <Text>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate('login_screen')}>
              <Text style={styles.signText}>Login here!</Text>
            </Pressable>
          </View>
          <Button
            title="submite"
            buttonPress={()=> signUp(userName,galleryphoto,email,password)}
          />
        
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
