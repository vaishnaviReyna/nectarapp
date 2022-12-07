import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
const styles = StyleSheet.create({
  selectedTextStyle:{
    fontWeight:"bold",
  },
  placeholderStyle:{
    color:colors.lightGray,
  },
  dropdown:{
    height: 50,
    borderColor:colors.lightGray,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    marginBottom:30,
  }
});
export default styles;
