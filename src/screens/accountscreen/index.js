import {View, Text, FlatList, Image, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {account} from '../../constants/Data';
import icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Button from '../../components/button';

const AccountScreen = ({navigation}) => {
  const [text, onChangeText] = useState('vaishnavi chauhan');
  const renderItem = ({item}) => (
    <View style={styles.rowContainer}>
      <View style={styles.rowStyle}>
        <Image source={item.img} style={styles.logo} />
        <Text style={styles.title}>{item.label}</Text>
      </View>
      <Image source={icons.rightArrow} />
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={[styles.rowStyle, styles.userStyle]}>
        <Image source={Images.user} />
        <View style={styles.rightName}>
          <View style={styles.rowStyle}>
            <TextInput
              style={[styles.title, styles.input]}
              value={text}
              onChangeText={onChangeText}
            />
            <Image source={icons.pen} style={styles.pen} />
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
      <View style={styles.backStyle}>
      <Image source={icons.backIcon}  />
      <Pressable onPress={() => navigation.navigate('spalsh_screen')}>
        <Text style={styles.textBtnStyle}>Log Out</Text>
      </Pressable>
      </View>
      
    </View>
  );
};

export default AccountScreen;
