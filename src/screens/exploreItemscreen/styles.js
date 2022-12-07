import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  logo: {
    position: 'absolute',
    top: 17,
    left: 12,
  },
  logoFilter: {
    position: 'absolute',
    top: -30,
    right: 12,
  },
  input: {
    borderBottomWidth: 0,
    paddingLeft: 35,
    width: '70%',
  },
});
export default styles;
