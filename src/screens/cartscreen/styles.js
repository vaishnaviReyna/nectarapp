import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10,
    paddingVertical:5,
    position:"relative",
  },
  btn:{
    flex:3,
    position:"absolute",
    bottom:10,
    left:10,
    right:10,
  },
  modelStyle:{
    backgroundColor:colors.white,
    paddingHorizontal:10,
    paddingVertical:5,
    borderTopLeftRadius:20,
    borderTopEndRadius:20,
  },
  bottomModal:{
    justifyContent: 'flex-end',
    margin: 0,
  },
  modelTitle:{
    flexDirection:"row",
    justifyContent:"space-between",
  
  },
  title:{
    fontWeight:"bold",
    fontSize:FontSize.XLarge,
    color:colors.black,
  },
  arrow:{
    marginLeft:8,
  },
  bold:{
    fontWeight:"bold",
    color:colors.black,
  }
});
export default styles;
