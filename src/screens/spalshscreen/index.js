import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import icons from '../../constants/Icons';

const SpalshScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('welcome_screen');
    }, 1000);
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={icons.logo} />
        <View>
          <Text style={styles.title}>nectar</Text>
          <Text style={styles.subTitle}>online groceris</Text>
        </View>
      </View>
    </View>
  );
};

export default SpalshScreen;
