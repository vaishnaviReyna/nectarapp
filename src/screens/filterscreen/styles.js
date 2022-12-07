import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 5,
    position: 'relative',
  },
  withCol: {},
  gCol: {
    color: colors.green,
  },
  titles: {
    color: colors.black,
    fontSize: FontSize.medium,
    marginTop: 10,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  btnStyles: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
});
export default styles;
