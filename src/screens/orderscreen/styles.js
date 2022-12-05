import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingVertical:5,
    flex:1,
    backgroundColor:colors.white,
  },
  textContainer:{
   alignItems:"center",
  },
  title:{
 textAlign:"center",
    fontSize:FontSize.XXLarge+2,
    color:colors.black,
    fontWeight:"bold",
    marginVertical:15,
  },
  subTitle:{
    textAlign:"center",
      fontSize:FontSize.medium,
  },
  btn:{
    backgroundColor:colors.white,
  },
  btnTitle:{
    color:colors.black
  }
    
 

});
export default styles;
