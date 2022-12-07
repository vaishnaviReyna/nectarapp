import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import styles from './styles';
import icons from '../../constants/Icons';

const Card = props => {
  const {img, title, price, onpress} = props;
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={img} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bottom}>
        <Text style={styles.price}>${price}</Text>
        <TouchableOpacity onPress={onpress} style={styles.plus}>
          <Image source={icons.plus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
