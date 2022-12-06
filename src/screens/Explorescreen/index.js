import { View, Text,TextInput,FlatList,Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../components/input';
import styles from './styles';
import icons from '../../constants/Icons';
import {explore} from "../../constants/Data";

const ExploreScreen = ({navigation}) => {
 
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  useEffect(() => {
    setFilteredDataSource(explore);
  }, []);


  const searchFilterFunction = (text) => {
    setSearch(text);
   
    if (text) {
      const newData = explore.filter(
        function (item) {
          const itemData = item.label
            ? item.label.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(explore);
      setSearch(text);
    }

  };
  let numColumns=2;
  const ItemView = ({item}) => {
        return <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate('exploreitem_screen',item)}>
        <Image source={item.img}/>
          <Text style={styles.title}>{item.label}</Text>
        </TouchableOpacity>

  };
  return (
    <View style={styles.container}>
        <Image source={icons.search} style={styles.logo} />
        <Input onChangeText ={(text) => searchFilterFunction(text)}
        value={search}
        placeholder="Search Store"
        leftIcon=""
        telcode=""
        style={styles.input}
        />
         <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
          numColumns={numColumns}
        />
    </View>
  )
}

export default ExploreScreen