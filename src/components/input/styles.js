import {StyleSheet} from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  inputContainer: {
    fontSize: 16,
    color: colors.black,
    paddingLeft: 95,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  leftIconContainer: {
    position: 'absolute',
    top: 12,
    left: 10,
  },
  telCodeContainer: {
    position: 'absolute',
    top: 12,
    left: 50,
  },
  title: {
    color: colors.black,
    fontWeight: '5grgtr00',
    fontSize: 18,
  },
});

export default styles;
