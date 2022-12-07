import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import icons from '../../constants/Icons';
import Card from '../../components/card';
import Input from '../../components/input';


const ExploreItemScreen = ({navigation, route}) => {
  const {list,label} = route.params;
  console.log("l",route.params)
  console.log("gfg",label);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);


  useEffect(() => {
    setFilteredDataSource(list);
    navigation.setOptions({
       title:label,
       headerTitleAlign: 'center', 
       headerRight: () => (
        <TouchableOpacity onPress={()=> navigation.navigate('filter_screen')}>
        <Image source={icons.filter} />
      </TouchableOpacity>
      ),
});
  }, []);

  const searchFilterFunction = (text) => {
    setSearch(text);
   
    if (text) {
      const newData = list.filter(
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
      setFilteredDataSource(list);
      setSearch(text);
    }

  };
  let numColumns = 2;
  const renderItem = ({item}) => (
    <Card
      title={item.label}
      price={item.price}
      img={item.img}
      onpress={() => navigation.navigate('basket_screen', item)}
    />
  );

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <ScrollView>
        <Image source={icons.search} style={styles.logo} />
        <Input onChangeText ={(text) => searchFilterFunction(text)}
        value={search}
        placeholder="Search Store"
        leftIcon=""
        telcode=""
        style={styles.input}
        />
          <View>
            <FlatList
              data={filteredDataSource}
              renderItem={renderItem}
              numColumns={numColumns}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ExploreItemScreen;
