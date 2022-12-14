import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.green,
    width: '100%',
    padding: 10,
    borderRadius: 15,
    marginTop:20,
  },
  textStyle: {
    fontSize: FontSize.small - 2,
    color: colors.white,
    textAlign: 'center',
    fontWeight: '700',
  },
});
export default styles;
