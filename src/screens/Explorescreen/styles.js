import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: colors.white,
  },
  logo:{
    position:"absolute",
    top:30,
    left:15,
  },
  input: {
    borderBottomWidth: 0,
    paddingLeft: 30,
  },
  box: {
    borderWidth: 1,
    borderColor: colors.green,
    width: 155,
    height: 160,
    marginHorizontal: 8,
    marginVertical: 8,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15  
  },
  title:{
    width:95,
    textAlign:"center",
    marginTop:15,
    fontSize:FontSize.XSmall,
    fontWeight:"bold",
    color:colors.black,
  }
});
export default styles;
