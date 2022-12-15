import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import Images from '../../constants/Images';
import icons from '../../constants/Icons';
import styles from './styles';
import Button from '../../components/button';
import {useSelector} from "react-redux";
import auth from "@react-native-firebase/auth";

const WlcomeScreen = ({navigation}) => {
  const userinfo = useSelector((state)=>state.userReducer.lists)
  console.log("userinfo from selector", userinfo);

  const signOut = () => {
    return auth().signOut()
}

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={Images.deliveryboy}
        resizeMode="cover"
        style={styles.bgImage}>
        <View style={styles.container}>
          <Image source={icons.logo} style={styles.logo} />
          <Text style={styles.title}> Welcome{'\n'}</Text>
          <Text style={styles.subTitle}>
          {`${userinfo.name}`}
          </Text>
         

          <Button
            title=" Go profile screen"
            buttonStyle={styles.buttonStyle}
            buttonPress={() => navigation.navigate('account_screen')}
          />
           <Button
            title="Sign out"
            buttonStyle={styles.buttonStyle}
            buttonPress={()=>signOut()}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default WlcomeScreen;
