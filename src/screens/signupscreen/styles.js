import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  container: {
    height: 150,
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
    marginVertical: 15,
    justifyContent: 'center',
  },
  signText: {
    color: colors.green,
    marginLeft: 5,
  },
});
export default styles;
