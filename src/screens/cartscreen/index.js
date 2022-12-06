import { View, Text,TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react';
import Modal from "react-native-modal";
import Cart from '../../components/cart';
import styles from './styles';
import Button from '../../components/button';
import Icons from '../../constants/Icons';

const CartScreen = ({navigation, route}) => {
  const{id,label,img,count,price} = route.params;
  const[cartValue,SetCartValue]=useState(count);
  const[tab,SetTab]=useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
       <View>
      {tab?<Cart title={label} price={price * cartValue} img={img} count={cartValue}
       pressPlus={()=>SetCartValue(cartValue + 1)}
      pressMin={()=>SetCartValue(cartValue - 1)}
      onclose={()=>SetTab(false)}/>:<></>
      }
      </View>

      <View style={styles.btn}>
      <Button title="Go to Checkout" buttonPress={()=>toggleModal()}  />
    
      <Modal isVisible={isModalVisible}
         style={styles.bottomModal}
      >
        <View style={styles.modelStyle}>
          <View style={styles.modelTitle}>
          <Text  style={styles.title}>Checkout</Text>
          <TouchableOpacity onPress={()=>toggleModal()}>
            <Image source={Icons.close} />
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:"column", justifyContent:"space-evenly", height:230,}}>
          <View style={styles.modelTitle}>
      <Text>Delivery</Text>
      <View style={styles.modelTitle}>
      <Text style={styles.bold}>Select Method</Text>
      <Image source={Icons.rightArrow} style={styles.arrow}/>
      </View>
      
      
            </View>

            <View style={styles.modelTitle}>
      <Text>payment</Text>
      <View style={styles.modelTitle}>
      <Image source={Icons.flag} />
      <Image source={Icons.rightArrow} style={styles.arrow}/>
      </View>
    
            </View>

            <View style={styles.modelTitle}>
      <Text>Promo Code</Text>
      <View style={styles.modelTitle}>
      <Text style={styles.bold}>Pick discount</Text>
      <Image source={Icons.rightArrow} style={styles.arrow}/>
      </View>

            </View>

            <View style={styles.modelTitle}>
      <Text>Total Cost</Text>
      <View style={styles.modelTitle}>
      <Text style={styles.bold}>${price * cartValue } </Text>
      <Image source={Icons.rightArrow} style={styles.arrow}/>
      </View>
    
            </View>
            <Text>By placing an order you agree to our{"\n"}
             <Text style={styles.bold}>Terms</Text> and<Text style={styles.bold}> Condition</Text> </Text>
          </View>
         
          
          <Button title="place Order" buttonPress={()=>navigation.navigate('order_screen')}/>
        </View>
      </Modal>

      </View> 
     
    </View>
  )
}

export default CartScreen