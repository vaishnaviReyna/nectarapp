import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  locoContainer: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 30,
    marginBottom: 35,
  },
  title: {
    fontWeight: 'bold',
    fontSize: FontSize.XXXLarge,
    marginVertical: 10,
    color: colors.black,
  },
  subTitle: {
    textAlign: 'center',
  },
});
export default styles;
