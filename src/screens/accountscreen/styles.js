import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: colors.white,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  pen: {
    marginTop: 5,
    position: 'absolute',
    right: 30,
  },
  rightName: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
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
