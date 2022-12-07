
import {
  Dimensions,
} from 'react-native';import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:12,
    paddingVertical:5,
  },
  btnBox:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:20,
    position:"absolute",
    bottom:50,
  width:Dimensions.get('window').width,
  },
  title:{
    fontSize:FontSize.XLarge,
    color:colors.black,
    fontWeight:"bold",
    marginBottom:25,
  },
  code:{
    color:colors.green,
    marginTop:18,
  },
  btn:{
    width:45,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.green,
    borderRadius:25,
  },
  inputStyle:{
    paddingLeft:10,
  }
});
export default styles;
