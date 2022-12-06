import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
    paddingVertical:15,
    flex:1,
    backgroundColor:colors.white
  },
  rowContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:15,
    paddingVertical:9,
    borderBottomWidth:1,
    borderBottomColor:colors.lightGray
  },
  rowStyle:{
    flexDirection:"row",
  },
  pen:{
    marginTop:5,
    position:"absolute",
    right:30,
  },
  rightName:{
    flexDirection:"column",
    justifyContent:"center",
    marginLeft:15
  },
  userStyle:{
    marginBottom:15,
 
  },
  logo:{
    marginRight:15,
  },
  title:{
    fontSize:FontSize.small-1,
    fontWeight:"bold",
  },
  input:{
    padding:0,
    width:200,
  },
  btnStyle:{
    backgroundColor:colors.white,
  },
  textBtnStyle:{
    color:colors.green,
  },
  backStyle:{
    position:"absolute",
    bottom:25,
    left:35,
    zIndex:1

  }
});
export default styles;
