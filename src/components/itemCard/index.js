import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import icons from '../../constants/Icons';

const ItemCard = props => {
  const {img, title, subTitile, price, onPress} = props;
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={img} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text>{subTitile}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>${price}</Text>
          <Image source={icons.rightArrow} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;
