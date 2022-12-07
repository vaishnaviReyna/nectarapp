import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:12,
    paddingVertical:5,
  },
  btnBox:{
    position:"absolute",
    bottom:50,
    right:20
  },
  title:{
    fontSize:FontSize.XLarge,
    color:colors.black,
    fontWeight:"bold",
    marginBottom:25,
  },

  btn:{
    width:45,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.green,
    borderRadius:25,
  },
});
export default styles;
