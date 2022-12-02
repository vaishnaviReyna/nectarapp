import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bgImage:{
    flex:1,
  },
  container:{
    paddingHorizontal:15,
    paddingVertical:15,
    position:"absolute",
     top:"50%",
     width:"100%",
    alignItems:"center",
  },
  logo:{
    width:40,
    height:50,
    marginBottom:5,
  },
  title:{
    fontSize: FontSize.XXXXLarge+5,
    fontWeight:"500",
    color: colors.white,
  },
  subTitle:{
    color: colors.white,
  },
  buttonStyle:{
    marginTop:40,
  }
});
export default styles;
