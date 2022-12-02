import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal:15,
  },
  title: {
    fontSize: FontSize.medium +2,
    color: colors.black,
    fontWeight:"500",
  },
  subTitle:{
    color: colors.green,
    marginTop:5,
    fontWeight:"bold",
  },
  itemTitle:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:5,
  }
 
});
export default styles;
