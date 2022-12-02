import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:colors.white,
    },
    img:{
      height:350
    },
    container:{
      flex:2,
      paddingHorizontal:15,
    },
    social:{
      alignItems:"center",
      marginTop:30,
    },
    title: {
      fontSize: FontSize.medium +2,
      color: colors.black,
      fontWeight:"500",
    },
    buttonGStyle:{
      marginTop:25,
      marginBottom:15,
      backgroundColor:colors.sky,
    },
    buttonFStyle:{
      backgroundColor:colors.blue,
    },
});
export default styles;
