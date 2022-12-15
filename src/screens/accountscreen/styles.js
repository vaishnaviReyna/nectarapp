import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    flex: 1,
    backgroundColor: colors.white,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  containerImg:{
    height:140,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  rightName: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
  },
  tinyLogo: {
    width: 120,
    height: 120,
    borderWidth:1,
    borderRadius:60,
    borderColor:colors.black,
  },
  titleName:{
fontWeight:"bold",
fontSize:FontSize.large,
marginRight:15,
  },
  userStyle: {
    marginBottom: 15,
  },
  logo: {
    marginRight: 15,
  },
  title: {
    fontSize: FontSize.small - 1,
    fontWeight: 'bold',
  },
  input: {
    padding: 0,
    width: 200,
  },
  btnStyle: {
    backgroundColor: colors.red,
  },
  textBtnStyle: {
    color: colors.green,
    fontWeight:"bold",
    fontSize:FontSize.medium-1,
  },
  backStyle: {
    width:"60%",
    flexDirection:"row",
    justifyContent:"space-between",
    position: 'absolute',
    paddingLeft:30,
    bottom: 25,
  },
});
export default styles;
