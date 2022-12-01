import { View, Text,Image} from 'react-native'
import React from 'react';
import styles from "./styles";
import  {logo} from "../../constants/Icons"

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.logo}>
        <Text style={styles.title}>nectar</Text>
        <Text style={styles.subTitle}>online groceris</Text>
        </View>

      {/* <Text>Nectar</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('welcome_screen')}
      /> */}
    </View>
  )
}

export default HomeScreen