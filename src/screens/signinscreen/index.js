import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../constants/Images';
import Button from '../../components/button';
import Input from '../../components/input';

const SigninScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Image source={Images.vegitable} style={styles.img} />
        <View style={styles.container}>
          <Text style={styles.title}>
            Get your groceries {'\n'} with nectar
          </Text>
          <Input leftIcon />
          <View style={styles.social}>
            <Text> Or connect with social media </Text>
            <Button
              title="Countinue with Google"
              buttonStyle={styles.buttonGStyle}
              buttonPress={() => navigation.navigate('number_screen')}
            />
            <Button
              title="Countinue with Facebook"
              buttonStyle={styles.buttonFStyle}
              buttonPress={() => navigation.navigate('number_screen')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SigninScreen;
