import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import icons from '../../constants/Icons';
import Button from '../../components/button';

const BasketScreen = ({navigation, route}) => {
  const {id, label, price, img} = route.params;
  const [heartTab, SetheartTab]=useState(false);
  const [count,setCount]=useState(1);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={()=> navigation.navigate('cart_screen',{
        id:id,
        label:label,
        count:count,
        price:price,
        img:img
      })}>
      <Image source={icons.upload} />
    </TouchableOpacity>
    ),
  });
  return (
    <View style={styles.container}>
      <View style={styles.imgBlock}>
        <Image source={img} style={styles.img} />
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.title}>{label}</Text>
        {!heartTab? (
          <TouchableOpacity onPress={() => SetheartTab(true)}>
            <Image source={icons.heart} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => SetheartTab(false)}>
            <Image source={icons.redHeart} style={{width:25,height:25}} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={()=>setCount(count-1)}>
          <Image source={icons.gmin} style={[styles.logo,styles.logom]} />
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity onPress={()=>setCount(count+1)}>
          <Image source={icons.gplus} style={styles.logo} />
          </TouchableOpacity>

        </View>

        <Text style={styles.title}>{price * count}</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>Product Detail</Text>
        <Text>
          {label} are nutritious. Apples may be good for weight loss. apples may
          be good for your heart. As part of a healtful and varied diet.
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.subTitle}>Nutritions</Text>
        <View style={styles.rowContainer}>
          <Text>100gm</Text>
          <Image source={icons.rightArrow} style={styles.arrow} />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.subTitle}>Review</Text>
        <View style={styles.rowContainer}>
          {[1, 2, 3, 4, 5].map(i => {
            return <Image source={icons.star} />;
          })}
          <Image source={icons.rightArrow} style={styles.arrow} />
        </View>
      </View>
      <Button title="Add To Basket" buttonStyle={styles.btnStyle} buttonPress={() => navigation.navigate('cart_screen',{
        id:id,
        label:label,
        count:count,
        price:price,
        img:img
      })}/>
    </View>
  );
};

export default BasketScreen;
