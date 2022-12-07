import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Button from '../../components/button';
import {dropZone, dropArea} from '../../constants/Data';
import DropDowns from '../../components/dropdown';
import Images from '../../constants/Images';

const LocationScreen = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const [areaValue, setAreaValue] = useState('');
  console.log(dropZone);
  return (
    <View style={styles.container}>
      <View style={styles.locoContainer}>
        <Image source={Images.location} />
        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.subTitle}>
          Swithch on your location to stay in tune with what’s happening in your
          area
        </Text>
      </View>
      <View>
        <Text>Your Zone</Text>
        <DropDowns
          data={dropZone}
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
      </View>

      <View>
        <Text>Your Area</Text>
        <DropDowns
          data={dropArea}
          placeholder="Type of your area"
          value={areaValue}
          onChange={item => {
            setAreaValue(item.value);
          }}
        />
      </View>
      <Button
        title="Submit"
        buttonPress={() => navigation.navigate('login_screen')}
      />
    </View>
  );
};

export default LocationScreen;
