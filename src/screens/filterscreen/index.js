import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Cart from '../../components/cart';
import styles from './styles';
import Button from '../../components/button';
import Icons from '../../constants/Icons';
import CheckBoxs from '../../components/checkbox';
import {filterCategories} from '../../constants/Data';

const FilterScreen = ({navigation, route}) => {
  const {newData} = route.params;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const abc = (a)=>{
    console.log("aa",a );
    filterCategories.filter(item => item.id===a.id).forEach(item => item.isSelected = true)
    console.log("FFf",filterCategories);
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>Categories</Text>
        {filterCategories.map((i) => {
          return <CheckBoxs
            title={i.label}
            value={toggleCheckBox}
            onValueChange={(a)=> abc(i)}
          />
        })}
      </View>
      {/* <View>
    <Text>Brand</Text>
   </View> */}
    </View>
  );
};

export default FilterScreen;
