import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import fonts from '../../constants/Fonts';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal:15,
  },
  logo:{
    position:"absolute",
    top:17,
    left:12,
    
  },
  logoFilter:{
    position:"absolute",
    top:-30,
    right:12,
  },
    input: {
      borderBottomWidth: 0,
      paddingLeft: 35,
    },
  
});
export default styles;
