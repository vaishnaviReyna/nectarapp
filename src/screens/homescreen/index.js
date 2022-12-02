import {View, Text, Image, Pressable,ScrollView} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Images from '../../constants/Images';
import Input from '../../components/input';
import Button from '../../components/button';
import  {Exclusive} from '../../constants/Data';
import Card from '../../components/card';
const HomeScreen = ({navigation}) => {
 const [extab,setExtab]=useState(true);
  
  return (
    <View style={styles.mainContainer}>
       <ScrollView>
        <View>
        <Image source={Images.banner} />
        </View>
      
      <View>
        <View style={styles.itemTitle}>
        <Text style={styles.title}>Exclusive Offer</Text>
        <Pressable onPress={()=> setExtab(false)}>
        <Text style={styles.subTitle}>See all</Text>
        </Pressable>
        </View>

        <View >
          {extab ?<View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
            { 
          (Exclusive.slice(0,2)).map((i)=>
          <Card title={i.label} price={i.price} img={i.img} />
          )}
            </View>:<View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
            { 
          Exclusive.map((i)=>
          <Card title={i.label} price={i.price} img={i.img} />
          )}
            </View>

          }
       </View>
      </View>
      {/* <View>
        <View style={styles.itemTitle}>
        <Text style={styles.title}>Best Selling</Text>
        <Pressable onPress={()=> setExtab(false)}>
        <Text style={styles.subTitle}>See all</Text>
        </Pressable>
        </View>

        <View >
          {extab ?<View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
            { 
          (Exclusive.slice(0,2)).map((i)=>
          <Card title={i.label} price={i.price} img={i.img} />
          )}
            </View>:<View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
            { 
          Exclusive.map((i)=>
          <Card title={i.label} price={i.price} img={i.img} />
          )}
            </View>

          }
       </View>
      </View> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
