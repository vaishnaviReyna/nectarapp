import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.green,
    width: '100%',
    padding: 15,
    borderRadius: 15,
  },
  textStyle: {
    fontSize: FontSize.small-2,
    color: colors.white,
    textAlign: 'center',
    fontWeight: '700',
  },
});
export default styles;
