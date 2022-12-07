import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import styles from './styles';
import icons from '../../constants/Icons';

const Cart = props => {
  const {img, title, price, pressPlus, pressMin, count, onclose} = props;
  return (
    <View style={styles.container}>
      <Image source={img} />
      <View style={styles.desStyle}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={pressMin}>
            <Image source={icons.gmin} style={[styles.logo, styles.logomin]} />
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity onPress={pressPlus}>
            <Image source={icons.gplus} style={styles.logo} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.desStyle}>
        <TouchableOpacity onPress={onclose}>
          <Image source={icons.close} />
        </TouchableOpacity>
        <Text style={styles.title}>${price}</Text>
      </View>
    </View>
  );
};

export default Cart;
