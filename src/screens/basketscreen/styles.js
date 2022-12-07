import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
    backgroundColor: colors.white,
  },
  imgBlock: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 120,
    padding: 10,
    width: 150,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  logom: {
    marginTop: 7,
  },
  logo: {
    marginHorizontal: 10,
  },
  arrow: {
    marginLeft: 15,
    marginTop: 2,
  },
  heartRed: {
    backgroundColor: colors.red,
  },
  title: {
    fontSize: FontSize.XLarge,
    fontWeight: 'bold',
    color: colors.black,
  },
  subTitle: {
    fontSize: FontSize.medium - 1,
    fontWeight: '500',
    color: colors.black,
    marginVertical: 4,
    marginTop: 20,
  },
  btnStyle: {
    marginVertical: 15,
  },
});
export default styles;
