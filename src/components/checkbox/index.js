import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxs = props => {
  const {title, value, onValueChange, titleCol} = props;
  return (
    <View style={styles.container}>
      <CheckBox disabled={false} value={value} onValueChange={onValueChange} />
      <Text style={titleCol}>{title}</Text>
    </View>
  );
};

export default CheckBoxs;
