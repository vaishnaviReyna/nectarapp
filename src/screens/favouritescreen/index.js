import {View, FlatList} from 'react-native';
import React from 'react';
import {Beverage} from '../../constants/Data';
import ItemCard from '../../components/itemCard';
import styles from './styles';
import Button from '../../components/button';

const FavouriteScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <ItemCard
      title={item.label}
      price={item.price}
      img={item.img}
      subTitile={item.sublabel}
      onPress={() => favPress(item)}
    />
  );
  let FavObj = {};
  const favPress = item => {
    FavObj = {
      id: item.id,
      label: item.label,
      img: item.img,
      count: 1,
      price: item.price,
    };
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Beverage}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        title="Add All To Cart"
        buttonPress={() => navigation.navigate('cart_screen', FavObj)}
      />
    </View>
  );
};

export default FavouriteScreen;
