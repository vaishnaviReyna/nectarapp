import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.green,
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: FontSize.XXXXLarge + 30,
    color: colors.white,
  },
  subTitle: {
    color: colors.white,
    fontSize: FontSize.XXSmall,
    letterSpacing: 4,
    lineHeight: 11,
  },
});
export default styles;
