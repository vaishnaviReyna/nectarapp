import {View, Text, FlatList, Image, TextInput, TouchableOpacity, SnapshotViewIOS} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {account} from '../../constants/Data';
import icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Button from '../../components/button';
import {useSelector} from "react-redux";

import {ref,onValue} from "@firebase/database";
import {db} from '../../firebase/config';

const AccountScreen = ({navigation}) => {
  const userinfo = useSelector((state)=>state.userReducer.lists)
  const [Firedata,setFiredata] = useState();

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('welcome_screen')
        }>
        <Image source={icons.home} />
      </TouchableOpacity>
    ),
  });

  useEffect(() => {
// const abc = ref(db,"users/");
//  onValue(abc,(Snapshot)=>{
//   const data = Object.values(Snapshot.val());
// })
  //
  const dbRef = ref(db,"users/");
  onValue(dbRef,(snapshot)=>{
    let records = [];
    snapshot.forEach(childSnapshot => {
      let keyName =childSnapshot.key;
      let data =childSnapshot.val();
      records.push({"key":keyName, "data":data})
    })
    var singleData = records.filter(i => i.data.userName == userinfo.name)
    setFiredata(singleData[0].data.userSkill)
  })
},[])
  
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

    <View style={styles.containerImg}>
    <Image
        style={styles.tinyLogo}
        source={{
          uri:`${userinfo.avtar}`,
        }}
      />
    </View>

    <View>
      <View style={{alignItems:"center", paddingVertical:25}}>
      <Text style={styles.title}>{userinfo.name}</Text>
      </View>
 
    </View>

    <View>
      <View style={styles.rowContainer}>
        <Text>User Email</Text>
      <Text style={styles.title}>{userinfo.email}</Text>
      </View>
 
    </View>

    <View>
      <View style={styles.rowContainer}>
        <Text>Skil</Text>
      <Text style={styles.title}>{Firedata}</Text>
      </View>
 
    </View>   
    </View>
  );
};

export default AccountScreen;
