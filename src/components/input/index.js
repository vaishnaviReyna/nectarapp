import React from 'react';
import {View, TextInput,Image,Text} from 'react-native';
import icons from '../../constants/Icons';
import styles from './styles';

const Input = props => {
    
  const {
    telcode,
    placeholder,
    placeholderColor,
    onChangeText,
    value,
    defaultValue,
    style,
    secureTextEntry,
    leftIcon,
    onFocus,
    icnsty,
    telsty,
    maxLength,
    onBlur,
    multiline,
    editable,
    onPressIn,
    numberOfLines,
    textAlignVertical,
  } = props;
  return (
    <View style={[styles.mainContainer]}>
       
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        onChangeText={onChangeText}
        value={value}
        defaultValue={defaultValue}
        style={[styles.inputContainer,style, {textAlign: 'left'}]}
        secureTextEntry={secureTextEntry}
        editable={editable}
        onPressIn={onPressIn}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical={textAlignVertical}
      />
       {leftIcon !== '' && (
        <View style={[styles.leftIconContainer, icnsty]}>
          <Image source={icons.flag} />
        </View>
      )}
       {telcode !== '' && (
        <View  style={[styles.telCodeContainer, telsty]}>
        <Text style={styles.title}>+880</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
