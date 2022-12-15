import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  container: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSize.medium + 2,
    color: colors.black,
    fontWeight: '500',
  },
  subTitle: {
    color: colors.gray,
    marginTop: 5,
  },
  loginArea: {
    paddingVertical: 40,
  },
  inputStyle: {
    paddingLeft: 10,
  },
  pass: {
    marginTop: 30,
  },
  fpass: {
    textAlign: 'right',
    marginTop: 5,
    marginBottom: 15,
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cameraText:{
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent:'space-between',
  },
  signText: {
    color: colors.green,
    marginLeft: 5,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderWidth:1,
    borderRadius:20,
  },
});
export default styles;
