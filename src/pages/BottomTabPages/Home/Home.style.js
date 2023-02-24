import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors/colors';

export default StyleSheet.create({
  header_container: {
    backgroundColor: colors.darkgray,
    flex: 1,
  },
  header_text: {
    padding: 10,
    color: 'white',
    fontWeight: '500',
    fontSize: 17,
    textAlign: 'center',
  },
});
