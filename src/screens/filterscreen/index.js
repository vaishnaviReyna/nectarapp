import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Button from '../../components/button';
import CheckBoxs from '../../components/checkbox';
import {filterCategories, filterBrand} from '../../constants/Data';
import icons from '../../constants/Icons';

const FilterScreen = ({navigation}) => {
  const [updateData, SetupdataData] = useState(filterCategories);
  const [updateBrandData, SetupdataBrandData] = useState(filterBrand);

  navigation.setOptions({
    title: 'Filter',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('explore_screen')}>
        <Image source={icons.closeB} />
      </TouchableOpacity>
    ),
  });

  const filterPress = i => {
    const modifiedData = updateData.map(e => {
      return e.id === i.id ? {...e, isSelected: !e.isSelected} : e;
    });
    SetupdataData(modifiedData);
  };

  const filterBrandPress = i => {
    const modifiedBrandData = updateBrandData.map(e => {
      return e.id === i.id ? {...e, isSelected: !e.isSelected} : e;
    });
    SetupdataBrandData(modifiedBrandData);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titles}>Categories</Text>
        {updateData.map(i => {
          return (
            <CheckBoxs
              title={i.label}
              value={i.isSelected}
              onValueChange={a => filterPress(i)}
              titleCol={!i.isSelected ? styles.withCol : styles.gCol}
            />
          );
        })}
      </View>
      <View>
        <Text style={styles.titles}>Brand</Text>
        {updateBrandData.map(i => {
          return (
            <CheckBoxs
              title={i.label}
              value={i.isSelected}
              onValueChange={a => filterBrandPress(i)}
              titleCol={!i.isSelected ? styles.withCol : styles.gCol}
            />
          );
        })}
      </View>
      <Button
        title="Apply Filter"
        buttonStyle={styles.btnStyles}
        buttonPress={() => navigation.navigate('explore_screen')}
      />
    </View>
  );
};

export default FilterScreen;
