import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
     height:90,
  },

   title:{
    fontWeight:"bold",
    color:colors.black,
    marginBottom:5,
    fontSize:FontSize.XSmall+1,
  },
  rowContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:60,
  },
  // desStyle:{
  // flexDirection:"column",justifyContent:"space-between"
  // },
  // logo:{
  //   marginHorizontal:10,
  // },
  // logomin:{
  //   marginTop:8,
  // },
  
 
 
});
export default styles;
