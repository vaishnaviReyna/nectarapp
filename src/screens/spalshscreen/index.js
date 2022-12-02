import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import icons from '../../constants/Icons';

const SpalshScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Pressable style={styles.container} onPress={() => navigation.navigate('welcome_screen')}>
        <Image source={icons.logo} />
        <View>
          <Text style={styles.title}>nectar</Text>
          <Text style={styles.subTitle}>online groceris</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SpalshScreen;
