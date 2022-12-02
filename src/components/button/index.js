import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = props => {
  const {buttonPress, buttonStyle, buttonDisable, title, textStyle,leftIcon,leftIconStyle} =
    props;
  return (
    <TouchableOpacity
      onPress={buttonPress}
      disabled={buttonDisable}
      style={[styles.buttonStyle, buttonStyle]}>
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
