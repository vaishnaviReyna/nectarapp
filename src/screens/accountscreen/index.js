import { View, Text,FlatList,Image,TextInput } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import {account} from '../../constants/Data';
import icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Button from '../../components/button';

const AccountScreen = ({navigation}) => {
  const [text, onChangeText] = useState("vaishnavi chauhan");
  const renderItem = ({ item }) => (
    <View style={styles.rowContainer}>
      <View style={styles.rowStyle}>
      <Image source={item.img} style={styles.logo} />
      <Text style={styles.title}>{item.label}</Text>
      </View>
      <Image source={icons.rightArrow}/>
    </View>
  );
  return (
    <View style={styles.container}>
     <View style={[styles.rowStyle,styles.userStyle]}>
          <Image source={Images.user}/>
     <View style={styles.rightName}>
      <View style={styles.rowStyle}>
      <TextInput
        style={[styles.title,styles.input]}
        value={text}
        onChangeText={onChangeText}
      />
      <Image source={icons.pen} style={styles.pen}/>
      </View>
      <Text>Imshuv97@gmail.com</Text>
     </View>
     </View>

     <View>
     <FlatList
        data={account}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> 
     </View>
     <Image source={icons.backIcon} style={styles.backStyle}/>
     <Button title="Log Out" buttonStyle={styles.btnStyle} textStyle={styles.textBtnStyle}
     buttonPress={()=>navigation.navigate("spalsh_screen")} />
    </View>
  )
}

export default AccountScreen