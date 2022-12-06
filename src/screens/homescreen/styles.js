import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import fonts from '../../constants/Fonts';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal:15,
    // fontFamily: fonts.primaryRegular,

  },
  title: {
    fontSize: FontSize.medium +2,
    color: colors.black,
    fontWeight:"500",
    fontFamily: fonts.primaryRegular,
  },
  subTitle:{
    color: colors.green,
    marginTop:5,
    fontWeight:"bold",
    fontFamily: fonts.primaryRegular,
  },
  itemTitle:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:5,
  
  }
 
});
export default styles;
