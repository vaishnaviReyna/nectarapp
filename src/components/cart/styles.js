import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    height:90,
    padding:10,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:colors.lightGray,

  },
  rowContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  desStyle:{
  flexDirection:"column",justifyContent:"space-between"
  },
  logo:{
    marginHorizontal:10,
  },
  logomin:{
    marginTop:8,
  },
  
  title:{
    fontWeight:"bold",
    color:colors.black,
  },
 
});
export default styles;
