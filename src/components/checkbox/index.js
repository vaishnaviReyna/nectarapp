import React from 'react';
import {TouchableOpacity, Text,View,Image} from 'react-native';
import styles from './styles';
import icons from '../../constants/Icons';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxs = props => {
  const {title,value,onValueChange} =
    props;
  return (
    
    <View style={styles.container} > 
    <CheckBox
    disabled={false}
    value={value}
    onValueChange={onValueChange}
  />
  <Text>{title}</Text>
   </View>
  );
};

export default CheckBoxs;
