import {View, Text, Image, Pressable, SafeAreaView ,FlatList,ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Images from '../../constants/Images';
import {Exclusive,Groceries} from '../../constants/Data';
import Card from '../../components/card';
import Button from '../../components/button';


const HomeScreen = ({navigation}) => {
  const [extab, setExtab] = useState(true);
  const [groceriestab,setGroceriestab]=useState(true);

  navigation.setOptions({
    headerShown: false 
});

  let numColumns=2;
  const renderItem = ({ item }) => (
    <Card title={item.label} price={item.price} img={item.img} onpress={()=>navigation.navigate('basket_screen',item)}/>
  );


  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={Images.banner} />
        </View>
        <View>
          <View style={styles.itemTitle}>
            <Text style={styles.title}>Exclusive Offer</Text>
            <Pressable onPress={() => setExtab(false)}>
              <Text style={styles.subTitle}>See all</Text>
            </Pressable>
          </View>

          <View>
            {extab ? (
              <View>
                  <FlatList
                  data={Exclusive.slice(0, 2)}
                  renderItem={renderItem}
                   numColumns={numColumns}
                  keyExtractor={item => item.id}
                />
              </View>
            ) : (
              <View>
                 <FlatList
                  data={Exclusive}
                  renderItem={renderItem}
                  numColumns={numColumns}
                  keyExtractor={item => item.id}
                />
              </View>
            )}
          </View>
        </View>
        <View>
          <View style={styles.itemTitle}>
            <Text style={styles.title}>Groceries</Text>
            <Pressable onPress={() => setGroceriestab(false)}>
              <Text style={styles.subTitle}>See all</Text>
            </Pressable>
          </View>

          <View>
            {groceriestab ? (
              <View>
                  <FlatList
                  data={Groceries.slice(0, 2)}
                  renderItem={renderItem}
                   numColumns={numColumns}
                  keyExtractor={item => item.id}
                />
              </View>
            ) : (
              <View>
                 <FlatList
                  data={Groceries}
                  renderItem={renderItem}
                  numColumns={numColumns}
                  keyExtractor={item => item.id}
                />
              </View>
            )}
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
