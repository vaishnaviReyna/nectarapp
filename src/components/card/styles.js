import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
  container:{
    width:152,
    paddingHorizontal:10,
    paddingVertical:5,
    marginHorizontal:8,
    marginVertical:10,
    borderWidth:1,
    borderColor:colors.lightGray,
    borderRadius:10,
  },
  logo:{
  alignItems:"center",
  height:80,
  },
  bottom:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  title:{
    marginVertical:4,
    // fontWeight:"bold",
    fontFamily: fonts.primaryRegular,
    color:colors.black,
  },
  price:{
    fontSize:FontSize.medium,
    color:colors.black,
    fontFamily: fonts.primaryBold,  
  },
  plus:{
   paddingHorizontal:10,
   paddingVertical:8,
    backgroundColor:colors.green,
   borderRadius:10,
  },
 
});
export default styles;
