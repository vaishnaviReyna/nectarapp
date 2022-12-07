import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Dropdown} from 'react-native-element-dropdown';

const DropDowns = props => {
  const {data, onChange, value, placeholder} = props;
  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </View>
  );
};

export default DropDowns;
