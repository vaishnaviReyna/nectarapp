import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container:{
    width:140,
    paddingHorizontal:10,
    paddingVertical:5,
    marginRight:25,
    marginBottom:10,
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
    fontWeight:"bold",
    color:colors.black,
  },
  price:{
    fontSize:FontSize.medium,
    color:colors.black,
    fontWeight:"bold",
  },
  plus:{
   paddingHorizontal:10,
   paddingVertical:8,
    backgroundColor:colors.green,
   borderRadius:10,
  },
 
});
export default styles;
